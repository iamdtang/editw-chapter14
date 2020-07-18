import Mixin from '@ember/object/mixin';
import { hasMany } from '@ember-data/model';

export default Mixin.create({
  comments: hasMany('comment', { async: false })
});
