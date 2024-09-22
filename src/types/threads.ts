export interface Threads {
  list: {
    content: Thread[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: ThreadsPage;
    size: number;
    sort: ThreadsSort[];
    totalElements: number;
    totalPages: number;
  };
}

export interface Thread {
  createdAt: string;
  profileThreadDto: {
    imgUrl: string;
    nickName: string;
    profileId: number;
  };
  tagNames: string[];
  texts: string;
  threadId: number;
  threadImg: string;
}

export interface ThreadsPage {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: ThreadsSort[];
  unpaged: boolean;
}

export interface ThreadsSort {
  ascending: boolean;
  direction: string;
  ignoreCase: boolean;
  nullHandling: string;
  property: string;
}
