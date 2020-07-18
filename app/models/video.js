import Model, { attr } from '@ember-data/model';
import Commentable from 'chapter14/mixins/commentable';

export default class VideoModel extends Model.extend(Commentable) {
  @attr('string') title;
}
