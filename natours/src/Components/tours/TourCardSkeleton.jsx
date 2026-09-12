function TourCardSkeleton() {
  return (
    <div className="bg-primary animate-pulse overflow-hidden rounded-2xl shadow-xl">
      {/* Image */}
      <div className="bg-secondary/20 h-64" />

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <div className="bg-secondary/20 h-6 w-3/4 rounded" />

        {/* Description lines */}
        <div className="bg-secondary/20 h-3 rounded" />

        <div className="bg-secondary/20 h-3 w-5/6 rounded" />

        {/* Bottom info */}
        <div className="flex justify-between pt-4">
          <div className="space-y-2">
            <div className="bg-secondary/20 h-4 w-20 rounded" />

            <div className="bg-secondary/20 h-3 w-24 rounded" />
          </div>

          <div className="bg-secondary/20 h-8 w-20 rounded" />
        </div>

        {/* Button */}
        <div className="bg-secondary/20 mt-5 h-10 rounded-full" />
      </div>
    </div>
  );
}

export default TourCardSkeleton;
