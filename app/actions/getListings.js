import prisma from "@/app/libs/prismadb";

// export default async function getListings() {
//   try {
//     const {
//       userId,
//       roomCount,
//       guestCount,
//       bathroomCount,
//       locationValue,
//       startDate,
//       endDate,
//       category,
//     } = params;

//     let query = {};

//     if (userId) {
//       query.userId = userId;
//     }

//     if (category) {
//       query.category = category;
//     }

//     if (roomCount) {
//       query.roomCount = {
//         gte: +roomCount,
//       };
//     }

//     if (guestCount) {
//       query.guestCount = {
//         gte: +guestCount,
//       };
//     }

//     if (bathroomCount) {
//       query.bathroomCount = {
//         gte: +bathroomCount,
//       };
//     }

//     if (locationValue) {
//       query.locationValue = locationValue;
//     }

//     if (startDate && endDate) {
//       query.NOT = {
//         reservations: {
//           some: {
//             OR: [
//               {
//                 endDate: { gte: startDate },
//                 startDate: { lte: startDate },
//               },
//               {
//                 startDate: { lte: endDate },
//                 endDate: { gte: endDate },
//               },
//             ],
//           },
//         },
//       };
//     }

//     const listings = await prisma.listing.findMany({
//       // where: query,
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     const safeListings = listings.map((listing) => ({
//       ...listing,
//       createdAt: listing.createdAt.toISOString(),
//     }));

//     return safeListings;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return listings;
  } catch (error) {
    throw new Error(error);
  }
}
