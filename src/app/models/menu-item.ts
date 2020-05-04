
export class MenuCate {
  Name: string;
  Items: MenuItem[];
}


export class MenuItem {
  Name: string;
  Variations: Size[]
}

export class Size {
  Desc: string;
  Price: number
}

export class SelectedItem {
  title: string;
  label: string;
  price: number
}
