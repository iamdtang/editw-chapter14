import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  serializePolymorphicType(snapshot, json, relationship) {
    super.serializePolymorphicType(snapshot, json, relationship);

    console.log('serializePolymorphicType', {
      snapshot,
      json,
      relationship
    });
  }

  extractPolymorphicRelationship(
    relationshipType,
    relationshipHash,
    relationshipOptions
  ) {
    const original = super.extractPolymorphicRelationship(...arguments);

    console.log('extractPolymorphicRelationship:', {
      original,
      relationshipType,
      relationshipHash,
      relationshipOptions
    });

    return original;
  }

  keyForPolymorphicType(key, typeClass, method) {
    const original = super.keyForPolymorphicType(...arguments);

    console.log('keyForPolymorphicType:', { original, key, typeClass, method });

    return original;
  }
}
