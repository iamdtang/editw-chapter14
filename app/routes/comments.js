import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class CommentsRoute extends Route {
  async model() {
    return hash({
      products: this.store.findAll('product'),
      comments: this.store.findAll('comment'),
      user: this.store.findRecord('user', 1)
    });
  }
}
