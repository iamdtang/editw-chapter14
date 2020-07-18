import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CommentableController extends Controller {
  @action
  async createComment(body) {
    let comment = this.store.createRecord('comment', {
      body,
      commentable: this.model
    });
    await comment.save();
    this.model.comments.pushObject(comment);
  }
}
