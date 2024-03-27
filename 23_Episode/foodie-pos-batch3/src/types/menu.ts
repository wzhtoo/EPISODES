import { BaseOptions } from "./user";

interface BaseMenu {
  name: string;
  price: number;
}

export interface NewMenu {
  name: string;
  price: number;
}

export interface Menu extends BaseMenu {
  id: number;
}

export interface NewMenuParams extends BaseMenu, BaseOptions {}
