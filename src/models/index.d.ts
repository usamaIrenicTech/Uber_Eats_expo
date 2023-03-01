import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum OrderStatus {
  NEW = "NEW",
  COOKING = "COOKING",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED"
}



type EagerOrderDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly Dishes?: Dishes | null;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishDishesId?: string | null;
}

type LazyOrderDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly Dishes: AsyncItem<Dishes | undefined>;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDishDishesId?: string | null;
}

export declare type OrderDish = LazyLoading extends LazyLoadingDisabled ? EagerOrderDish : LazyOrderDish

export declare const OrderDish: (new (init: ModelInit<OrderDish>) => OrderDish) & {
  copyOf(source: OrderDish, mutator: (draft: MutableModel<OrderDish>) => MutableModel<OrderDish> | void): OrderDish;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly Restaurants?: Restaurants | null;
  readonly total: number;
  readonly status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly OrderDishes?: (OrderDish | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderRestaurantsId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly Restaurants: AsyncItem<Restaurants | undefined>;
  readonly total: number;
  readonly status?: OrderStatus | keyof typeof OrderStatus | null;
  readonly OrderDishes: AsyncCollection<OrderDish>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderRestaurantsId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerBasketDis = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketDis, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly Dishes?: Dishes | null;
  readonly basketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketDisDishesId?: string | null;
}

type LazyBasketDis = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketDis, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity?: number | null;
  readonly Dishes: AsyncItem<Dishes | undefined>;
  readonly basketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketDisDishesId?: string | null;
}

export declare type BasketDis = LazyLoading extends LazyLoadingDisabled ? EagerBasketDis : LazyBasketDis

export declare const BasketDis: (new (init: ModelInit<BasketDis>) => BasketDis) & {
  copyOf(source: BasketDis, mutator: (draft: MutableModel<BasketDis>) => MutableModel<BasketDis> | void): BasketDis;
}

type EagerBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketDis?: (BasketDis | null)[] | null;
  readonly User?: User | null;
  readonly Restaurants?: Restaurants | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketUserId?: string | null;
  readonly basketRestaurantsId?: string | null;
}

type LazyBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketDis: AsyncCollection<BasketDis>;
  readonly User: AsyncItem<User | undefined>;
  readonly Restaurants: AsyncItem<Restaurants | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketUserId?: string | null;
  readonly basketRestaurantsId?: string | null;
}

export declare type Basket = LazyLoading extends LazyLoadingDisabled ? EagerBasket : LazyBasket

export declare const Basket: (new (init: ModelInit<Basket>) => Basket) & {
  copyOf(source: Basket, mutator: (draft: MutableModel<Basket>) => MutableModel<Basket> | void): Basket;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerDishes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dishes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly restaurantsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDishes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dishes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly restaurantsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dishes = LazyLoading extends LazyLoadingDisabled ? EagerDishes : LazyDishes

export declare const Dishes: (new (init: ModelInit<Dishes>) => Dishes) & {
  copyOf(source: Dishes, mutator: (draft: MutableModel<Dishes>) => MutableModel<Dishes> | void): Dishes;
}

type EagerRestaurants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Dishes?: (Dishes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Dishes: AsyncCollection<Dishes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restaurants = LazyLoading extends LazyLoadingDisabled ? EagerRestaurants : LazyRestaurants

export declare const Restaurants: (new (init: ModelInit<Restaurants>) => Restaurants) & {
  copyOf(source: Restaurants, mutator: (draft: MutableModel<Restaurants>) => MutableModel<Restaurants> | void): Restaurants;
}