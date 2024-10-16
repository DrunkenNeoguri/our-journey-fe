import type { KeyboardEvent } from 'react';
import { useEffect, useState } from 'react';

import type { Tag } from '@/types/tags';

import { useDynamicInput } from '@/hooks/contents/ui/use-input-width';
import useSearchTag from '@/hooks/tags/use-search-tag';
import { useSuggestions } from '@/hooks/tags/use-suggestions';

import s from './style.module.scss';

interface TagInputProps {
  addTag: (tagName: string, tagId?: number) => void;
  removeTag: (tagName: string) => void;
  tags: Array<Tag>;
}

export default function TagInput({ addTag, removeTag, tags }: TagInputProps) {
  const [newTag, setNewTag] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { data: suggestedTags, isLoading, isSuccess } = useSearchTag(searchQuery);

  const { selectedIndex, showSuggestions, setShowSuggestions, handleKeyDown, resetSuggestions } = useSuggestions(suggestedTags?.list.content);

  const { inputProps, adjustWidth } = useDynamicInput({
    initialValue: newTag,
    placeholder: '#해시태그',
    onChange: (value) => {
      setNewTag(value);
      setSearchQuery(value);
      setShowSuggestions(true);
    },
    onEnter: () => {
      if (newTag.trim()) {
        void addTag(newTag.trim());
        setNewTag('');
        resetSuggestions();
      }
    },
  });

  useEffect(() => {
    if (typeof adjustWidth === 'function') {
      adjustWidth();
    }
  }, [newTag, adjustWidth]);

  const handleSuggestionClick = (tagName: string, tagId: number) => {
    void addTag(tagName, tagId);
    setNewTag('');
    resetSuggestions();
    if (typeof adjustWidth === 'function') {
      adjustWidth();
    }
  };

  const sanitizeInput = (input: string) => input.replace(/[^\p{L}\p{N}_]/gu, '');

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      setNewTag((prev) => `${prev}_`);
    } else if (handleKeyDown(e)) {
      e.preventDefault();
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      const selectedTag = suggestedTags?.list.content[selectedIndex];
      if (selectedTag) {
        void addTag(selectedTag.tagName, selectedTag.tagId);
        setNewTag('');
        resetSuggestions();
        if (typeof adjustWidth === 'function') {
          adjustWidth();
        }
      }
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => resetSuggestions(), 200);
  };

  return (
    <div className={s.tagInput}>
      {tags.map((tag) => (
        <span key={tag.tagId} className={s.tag}>
          <button type="button" onClick={() => removeTag(tag.tagName)}>
            #{tag.tagName}
          </button>
        </span>
      ))}
      <div className={s.wrapTagInput}>
        <input
          {...inputProps}
          maxLength={40}
          onKeyDown={handleInputKeyDown}
          onBlur={handleInputBlur}
          onFocus={() => setShowSuggestions(true)}
          value={newTag}
          onChange={(e) => {
            const sanitizedValue = sanitizeInput(e.target.value);
            setNewTag(sanitizedValue);
            setSearchQuery(sanitizedValue);
            setShowSuggestions(true);
          }}
        />

        {showSuggestions && (
          <div className={s.suggestions}>
            {!isLoading &&
              isSuccess &&
              suggestedTags?.list.content.map((tag: Tag, index: number) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleSuggestionClick(tag.tagName, tag.tagId)}
                  className={index === selectedIndex ? s.selected : ''}
                >
                  {tag.tagName}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
