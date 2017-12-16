export class NewsFeedDetail {
  title: string;
  date: string;
  content: string;
  tags: string[];

  constructor() {
    this.title = undefined;
    this.date = undefined;
    this.content = undefined;
    this.tags = undefined;
  }

  public deserialize(input: Object): NewsFeedDetail {
    const detail: NewsFeedDetail = new NewsFeedDetail();
    detail.title = input['title'];
    detail.date = input['date'];
    detail.content = input['content'];
    detail.tags = input['tags'];
    return detail;
  }
}
