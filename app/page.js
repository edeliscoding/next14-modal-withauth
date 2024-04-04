import Image from "next/image";
import Container from "@/app/components/Container";
import ListingCard from "./components/listings/ListingCard";
import getListings from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";
export default async function Home({ searchParams }) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  // console.log(currentUser);
  return (
    <Container>
      <div
        className="pt-24
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-6
    gap-8"
      >
        {/* <h1>My Modal Project with Next AUthentication</h1> */}

        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
}
