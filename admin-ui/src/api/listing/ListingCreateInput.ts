import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { WhishlistCreateNestedManyWithoutListingsInput } from "./WhishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description: string;
  listingCreatedBy: UserWhereUniqueInput;
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
  plcaeAmeneties: InputJsonValue;
  price: number;
  title: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  whishlists?: WhishlistCreateNestedManyWithoutListingsInput;
};
