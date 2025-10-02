import { Asset } from "./AssetTable";

export default function sampleAssets(): Asset[] {
  return [
    { id: "1", number: "2503010791_0148", description: "Roller Compactor", subCategory: "Roller Compactor", status: "Available", capacity: 20, capacityUnit: "Tons", location: "Hyderabad" },
    { id: "2", number: "2403010521_0100", description: "Motor Grader", subCategory: "Grader", status: "Pre-Delivery Inspection", capacity: 160, capacityUnit: "kw", location: "Hyderabad" },
    { id: "3", number: "2407040971_0218", description: "Wheel Loader", subCategory: "Loader", status: "On Hired", capacity: 5, capacityUnit: "Cubic Meter", location: "Hyderabad" },
    { id: "4", number: "2301010031_0019", description: "Mobile Crane 25 Ton", subCategory: "Crane RT", status: "Off Hired", capacity: 25, capacityUnit: "Tons", location: "Hyderabad" },
    { id: "5", number: "2401010041_0045", description: "Dumper Volvo", subCategory: "Dumper", status: "Ready for Collection", capacity: 24, capacityUnit: "Cubic Meter", location: "Hyderabad" },
    { id: "6", number: "2405050961_0099", description: "Water Tanker", subCategory: "Water Tanker", status: "Post Hire Inspection", capacity: 20000, capacityUnit: "Liter", location: "Hyderabad" },
    { id: "7", number: "2405010151_0023", description: "Coach Bus", subCategory: "Commercial Bus", status: "Under Repair", capacity: 55, capacityUnit: "Seats", location: "Hyderabad" },
    { id: "8", number: "2403010871_0101", description: "Bull Dozer D9", subCategory: "Dozer", status: "Breakdown", capacity: 50, capacityUnit: "Tons", location: "Hyderabad" },
    { id: "9", number: "2308031034_0021", description: "Man Lift 28M XCMG", subCategory: "Manlift", status: "Work In Progress", capacity: 28, capacityUnit: "Meters", location: "Hyderabad" },
    { id: "10", number: "2407030381_0321", description: "Dump Truck", subCategory: "Dump Truck", status: "Temporary Transfer", capacity: 50, capacityUnit: "Tons", location: "Hyderabad" },
    { id: "11", number: "2401070711_1022", description: "Generator", subCategory: "Diesel Tanker", status: "Disposal", capacity: 20, capacityUnit: "Cubic Meter", location: "Hyderabad" },
    { id: "12", number: "2401050631_1189", description: "Pickup 4x4 /Double Cabin", subCategory: "Pick Up", status: "Disposal", capacity: 4, capacityUnit: "Seats", location: "Hyderabad" },
  ].map((a, i) => ({ ...a, id: `${a.id}-${i}` })); // create unique ids
}
