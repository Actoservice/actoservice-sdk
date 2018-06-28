export class Theme {
  constructor() {
    this._root = null;
    this._name = null;
    this._description = null;
  }

  set root(_root) {
    if (this._root) {
      console.warn('render() called multiple times, root has been changed');
    }

    this._root = _root;
  }
  set name(_name) {
    this._name = _name;
  }

  set description(_description) {
    this._description = _description;
  }
}

export default new Theme();