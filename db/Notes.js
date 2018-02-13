class Notes {}

Notes.schema = {
    name: 'Notes',
    properties: {
        id: 'int',
        title: 'string',
        text: 'string',
        favourites: 'bool',
        uuid: 'string'
    }
};

export default Notes;
