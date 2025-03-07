import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";
import { WhishlistUpdateManyWithoutListingsInput } from "./WhishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photos?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  plcaeAmeneties?: InputJsonValue;
  price?: number;
  title?: string;
  trips?: TripUpdateManyWithoutListingsInput;
  whishlists?: WhishlistUpdateManyWithoutListingsInput;
};
