import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  allProducts = [
    {
      id: 1001,
      name: 'Anderson Chest Of Drawers, Mocha',
      price: 99.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/18-800x534.jpg',
      status: 'in stock',
      category: 'Storage',
    },
    {
      id: 1002,
      name: 'Larsen Wide Chest Of Drawers',
      price: 189.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/20-800x800.jpg',
      status: 'in stock',
      category: 'Storage',
    },
    {
      id: 1003,
      name: 'Lucien Bedside, Light Mango Wood',
      price: 159.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/19-800x560.jpg',
      status: 'in stock',
      category: 'Storage',
    },
    {
      id: 1004,
      name: 'Lucien Wide Chest of Drawers',
      price: 299.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/21.jpg',
      status: 'in stock',
      category: 'Storage',
    },
    {
      id: 2001,
      name: 'Albert Ceiling Spotlight Bar, Charcoal',
      price: 289.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/28-800x652.jpg',
      category: 'Lighting',
      status: 'in stock',
    },
    {
      id: 2002,
      name: 'Chicago Large Pendant, Green & Brass',
      price: 129.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/30-800x800.jpg',
      category: 'Lighting',
      status: 'in stock',
    },
    {
      id: 2003,
      name: 'Gigi Tilting Pendant Chandelier Light',
      price: 89.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/1-13.jpg',
      category: 'Lighting',
      status: 'in stock',
    },
    {
      id: 2004,
      name: 'Java Shade Small, Natural Rattan',
      price: 189.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/1-12.jpg',
      category: 'Lighting',
      status: 'in stock',
    },
    {
      imageUrl: '/assets/IMGS/chair1.jpg',
      name: 'Herman Arm Chair, Finch Grey Cotton',
      id: 3001,
      category: 'chairs',
      price: 199,
      status: 'in stock',
    },

    {
      imageUrl: '/assets/IMGS/chair2.jpg',
      name: 'Knox Accent Chair, Natal Print',
      id: 3002,
      category: 'chairs',
      price: 399,
      status: 'in stock',
    },

    {
      imageUrl:
        'https://www.houseandhold.com/cdn/shop/products/9394839-0205ZZZZ_HarbourSideChairNaturalOakWhite_45.jpg?v=1648505421',
      name: 'Osmond Armchair, Ink Blue Velvet',
      id: 3003,
      category: 'chairs',
      price: 280,
      status: 'in stock',
    },

    {
      imageUrl: '/assets/IMGS/chair4.jpg',
      name: 'Lule Dining Chairs, Royal Yellow',
      id: 3004,
      category: 'chairs',
      price: 370,
      status: 'in stock',
    },

    {
      imageUrl:
        'https://www.officechairsuk.co.uk/wp-content/uploads/2023/09/herman-miller-asari-alpine-1500x1543.png',
      name: 'Stanley Accent Chair, Chestnut Brown',
      id: 3005,
      category: 'chairs',
      price: 280,
      status: 'in stock',
    },
    {
      id: 4001,
      name: 'Delia King Size Bed, Marine Velvet',
      price: 399.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/26.jpg',
      category: 'beds',
      status: 'in stock',
    },
    {
      id: 4002,
      name: 'Essentials Kano Platform Double Bed',
      price: 449.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/23.jpg',
      category: 'beds',
      status: 'in stock',
    },
    {
      id: 4003,
      name: 'Hyron Guest Bed with 2 Mattresses',
      price: 339.0, //after discount //before discount 449
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/25-600x450.jpg',
      category: 'beds',
      status: 'in stock',
    },
    {
      id: 4004,
      name: 'Kavaro 3000 Pocket Natural Kingsize',
      price: 489.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmHivIWpDvxqyW4DyuDwi3grEIIuUQgzvS3cNguf8c4aS5_kkkl00hpuSb9GqewTRJsk&usqp=CAU',
      category: 'beds',
      status: 'in stock',
    },
    {
      id: 4005,
      name: 'Roscoe King Size Bed, Aegean Blue',
      price: 429.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/24.jpg',
      category: 'beds',
      status: 'in stock',
    },
    {
      id: 6001,
      name: 'Dallas Seater Sofa, Outback Tan',
      price: 859.0, //=>after discount //before discount 959.00 //discount is 10%
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/1.jpg',
      category: 'sofas',
      status: 'in Stock',
    },
    {
      id: 6002,
      name: 'Haring Seater Sofa, Azure Blue',
      price: 1159.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/capture2.jpg',
      category: 'sofas',
    },
    {
      id: 6003,
      name: 'Herman Seater Sofa, Finch Grey Cotton',
      price: 999.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/03.jpg',
      category: 'sofas',
      status: 'in Stock',
    },
    {
      id: 6004,
      name: 'Nya Seater Sofa, Summit Grey Weave',
      price: 879.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/igp3305_1_-800x600.jpg',
      category: 'sofas',
      status: 'in Stock',
    },

    {
      id: 6005,
      name: 'Reece Seater Sofa, Mina Burnt Orange',
      price: 599.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/1-1.jpg',
      category: 'sofas',
      status: 'in Stock',
    },
    {
      id: 6006,
      name: 'Ritchie Seater Sofa, Anthracite Grey',
      price: 1499.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/1-2-600x296.jpg',
      category: 'sofas',
      status: 'in Stock',
    },
    {
      id: 6007,
      name: 'Scott Seater Sofa, Concrete Velvet',
      price: 699.0, //after discont //before discount 22% =899.00
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/igp3343-600x450.jpg',
      category: 'sofas',
      status: 'in Stock',
    },
    {
      id: 7001,
      name: 'Boone 8 Seat Dining Table, Concrete',
      price: 349.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/14-800x600.jpg',
      category: 'Tables',
      status: 'in Stock',
    },
    {
      id: 7002,
      name: 'Boone 8 Seat Dining Table, White Concrete',
      price: 189.0, //=> after discount //before discount 279 .00 -->discount is 32%
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/2-4-800x534.jpg',
      category: 'Tables',
      status: 'in Stock',
    },
    {
      id: 7003,
      name: 'Copa Garden Lounge Set, Citrus Green',
      price: 189.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/2-5-600x442.jpg',
      category: 'Tables',
      status: 'in Stock',
    },
    {
      id: 7004,
      name: 'Elona bedside table, grey and copper',
      price: 229.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/1-11-800x791.jpg',
      category: 'Tables',
      status: 'in Stock',
    },
    {
      id: 7005,
      name: 'Jenson 6-8 Seat Oval Extending Dining Table',
      price: 259.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/1-8-600x401.jpg',
      category: 'Tables',
      status: 'in Stock',
    },
  ];

  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  private wishlistSubject = new BehaviorSubject<any[]>([]);
  wishlist$ = this.wishlistSubject.asObservable();

  constructor() {
    this.loadCart();
    this.loadWishlist();
  }


  // Methods for retrieving products
  getAllProducts() {
    return this.allProducts;
  }

  getProductById(productId: number) {
    return this.allProducts.find((p) => p.id === productId) || null;
  }

  getProductsByCategory(category: string) {
    return this.allProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Cart methods
  addToCart(product: any, quantity: number): void {
    const currentCart = this.cartSubject.value;
    const existingItemIndex = currentCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      currentCart[existingItemIndex].quantity += quantity;
    } else {
      const cartItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        imageUrl: product.imageUrl,
      };
      currentCart.push(cartItem);
    }

    this.updateCart(currentCart);
  }

  removeFromCart(productId: number): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.filter((item) => item.id !== productId);
    this.updateCart(updatedCart);
  }

  updateCartItemQuantity(productId: number, quantity: number): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    );
    this.updateCart(updatedCart);
  }

  private updateCart(cart: CartItem[]): void {
    this.cartSubject.next(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  private loadCart(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartSubject.next(JSON.parse(storedCart));
    }
  }

  getCartTotal(): number {
    return this.cartSubject.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Wishlist methods
  addToWishlist(product: any): void {
    const currentWishlist = this.wishlistSubject.value;
    if (!currentWishlist.some((item) => item.id === product.id)) {
      currentWishlist.push(product);
      this.updateWishlist(currentWishlist);
    }
  }

  removeFromWishlist(productId: number): void {
    const currentWishlist = this.wishlistSubject.value;
    const updatedWishlist = currentWishlist.filter(
      (item) => item.id !== productId
    );
    this.updateWishlist(updatedWishlist);
  }

  private updateWishlist(wishlist: any[]): void {
    this.wishlistSubject.next(wishlist);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }

  private loadWishlist(): void {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      this.wishlistSubject.next(JSON.parse(storedWishlist));
    }
  }
}
