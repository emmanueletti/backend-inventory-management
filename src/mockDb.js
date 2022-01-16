module.exports = {
  data: [
    {
      id: 1,
      name: 'Leica M9',
      price: 900000,
      description:
        'The Leica M9 is a full-frame digital rangefinder camera from Leica Camera AG. It uses an 18.5-megapixel Kodak image sensor, and is compatible with almost all M mount lenses.',
      isActive: true,
      deleteNotes: null,
    },
    {
      id: 2,
      name: 'Fujifilm X100V',
      price: 180000,
      description:
        'The Fujifilm X100V (Roman Numeral "Fifth") is the successor to the Fujifilm X100F. It features a redesigned lens, a fourth generation X-Trans sensor, a 2-way tilting rear LCD screen, and partial weather resistance.',
      isActive: true,
      deleteNotes: null,
    },
    {
      id: 3,
      name: 'Canon 5D MK IV',
      price: 350000,
      description:
        'The Canon EOS 5D Mark IV is a professional-grade 30.1-megapixel full-frame digital single-lens reflex (DSLR) camera made by Canon.',
      isActive: true,
      deleteNotes: null,
    },
    {
      id: 4,
      name: 'Nikon D850',
      price: 400000,
      description:
        'The Nikon D850 is a professional-grade full-frame digital single-lens reflex camera (DSLR) produced by Nikon.',
      isActive: true,
      deleteNotes: null,
    },
  ],

  getItem(id) {
    return this.data.filter((item) => item.id === id);
  },

  getItemIndex(id) {
    return this.data.findIndex((item) => item.id === id);
  },

  editItem(id, fieldsToUpdate) {
    const { name, price, description } = fieldsToUpdate;
    const itemToUpdate = this.getItem(id);
    const itemToUpdateIndex = this.getItemIndex(id);

    if (!itemToUpdate.length) return;

    const updatedItem = {
      id: itemToUpdate[0].id,
      name: name ?? itemToUpdate[0].name,
      price: price ?? itemToUpdate[0].price,
      description: description ?? itemToUpdate[0].description,
    };

    this.data.splice(itemToUpdateIndex, 1, updatedItem);
    return updatedItem;
  },

  createNewItem({ name, price, description }) {
    const lastItemsId = this.data[this.data.length - 1].id;
    const newItem = { id: lastItemsId + 1, name, price, description };
    this.data.push(newItem);
    return newItem;
  },

  deleteItem(id) {
    const itemIndex = this.getItemIndex(id);
    if (itemIndex === -1) return;
    this.data.splice(itemIndex, 1);
  },
};
