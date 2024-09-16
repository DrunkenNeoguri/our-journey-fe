import Link from 'next/link';

import { ROUTES } from '@/constants/router';

import { useCategoryList } from '@/hooks/use-category-list';

import s from './style.module.scss';

import { FlightIcon, LuggageIcon } from '@/assets/icons/icons';

export default function CategoryArea() {
  const { data } = useCategoryList();
  const domesticCategoryList = data?.filter((category) => Number(category.categoryId) < 20);
  const foreignCategoryList = data?.filter((category) => Number(category.categoryId) >= 20);

  return (
    <div className={s.categoryListWrapper}>
      <div>
        <div className={s.categoryLabelArea}>
          <div className={s.categoryLabelBox}>
            <LuggageIcon />
            <h3 className={s.categoryLabel}>국내여행</h3>
          </div>
          <Link className={s.categoryAllLink} href={`${ROUTES.search}?categoryId=20`}>
            전체보기
          </Link>
        </div>
        <div className={s.categoryGrid}>
          {domesticCategoryList?.map(
            (category) =>
              category.categoryId !== '10' && (
                <Link key={category.categoryId} id={category.categoryId} href={`${ROUTES.search}?categoryId=${category.categoryId}`} className={s.categoryLink}>
                  <img loading="lazy" alt={`${category.categoryName}의 카테고리`} src={category.categoryImg} className={s.categoryImg} />
                  <span className={s.categoryLinkText}>{category.categoryName}</span>
                </Link>
              ),
          )}
        </div>
      </div>

      <div>
        <div className={s.categoryLabelArea}>
          <div className={s.categoryLabelBox}>
            <FlightIcon />
            <h3 className={s.categoryLabel}>해외여행</h3>
          </div>
          <Link className={s.categoryAllLink} href={`${ROUTES.search}?categoryId=20`}>
            전체보기
          </Link>
        </div>
        <div className={s.categoryGrid}>
          {foreignCategoryList?.map(
            (category) =>
              category.categoryId !== '20' && (
                <Link key={category.categoryId} id={category.categoryId} href={`${ROUTES.search}?categoryId=${category.categoryId}`} className={s.categoryLink}>
                  <img loading="lazy" alt={`${category.categoryName}의 카테고리`} src={category.categoryImg} className={s.categoryImg} />
                  <span className={s.categoryLinkText}>{category.categoryName}</span>
                </Link>
              ),
          )}
        </div>
      </div>
    </div>
  );
}
