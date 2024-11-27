import { makeAutoObservable } from "mobx";

export interface IDevice {
  id: number;
  name: string;
  price: number;
  brandId: number;
  typeId: number;
  img: string;
  info: string;
  rating: number;
  images: string[];
}

export interface IBrand {
  id: number;
  name: string;
}

export interface IType {
  id: number;
  name: string;
}
export default class DeviceStore {
  private _types: IType[] = [];
  private _brands: IBrand[] = [];
  private _devices: IDevice[] = [];
  private _selectedType: IType | null = null;
  public _selectedBrand: IBrand | null = null;

  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = null;
    this._selectedBrand = null;

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  get Types() {
    return this._types;
  }

  get Brands() {
    return this._brands;
  }
  get Devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
