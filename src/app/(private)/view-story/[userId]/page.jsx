import ViewStory from "@/components/pageComps/ViewStory";

export default function page({ params }) {
  return <ViewStory userId={params?.userId} />;
}
