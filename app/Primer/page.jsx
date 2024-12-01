"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "@/redux/primers/actions";

export default function PrimerPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading, primer: creators } = useSelector((state) => state.primers);

  const [isExpanded, setIsExpanded] = useState(false);
  const [primedCreators, setPrimedCreators] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const safeCreators = creators?.data || [];
  const visibleCreators = isExpanded ? safeCreators : safeCreators.slice(0, 10);

  const handlePrime = (creatorId) => {
    setPrimedCreators((prev) =>
      prev.includes(creatorId)
        ? prev.filter((id) => id !== creatorId)
        : [...prev, creatorId]
    );
  };

  return (
    <div className="min-h-screen bg-[#0e2b45] text-white p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="w-24" />
        <div className="text-center">
          <h1 className="text-[#4ade80] text-xl font-medium mb-1">
            PRIME A CREATOR
          </h1>
          <p className="text-sm text-gray-300">MIN 3</p>
        </div>
        <button
          variant="ghost"
          className="text-[#4ade80] hover:text-[#4ade80]/90 w-24"
          onClick={() => router.push("/dashboard")}
        >
          SKIP
        </button>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <p className="text-center text-[#4ade80]">Loading...</p>
      ) : (
        <>
          {/* Total Primed Counter */}
          <div className="mb-6">
            <p className="text-[#4ade80]">
              TOTAL PRIMED <span className="ml-2">{primedCreators.length}</span>
            </p>
          </div>

          {/* Creator Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {visibleCreators?.map((creator) => (
              <div
                key={creator.id}
                className="bg-[#3f9e5c] rounded-lg p-3 flex items-start space-x-3"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/svgicon.jpeg"
                    alt={creator.profile?.username ?? "Placeholder name"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-[#4ade80] font-medium text-sm">
                    {creator.profile?.username ?? "Placeholder name"}
                  </h3>
                  <div className="space-y-0.5">
                    <p className="text-xs text-gray-300">
                      Videos: {creator.profile?.number_of_videos ?? 0}
                    </p>
                    <p className="text-xs text-gray-300">
                      Primers: {creator.profile?.number_of_followers ?? 0}
                    </p>
                  </div>
                  <button
                    onClick={() => handlePrime(creator.profile?.id)}
                    className={`w-full rounded-md mt-2 py-1 px-2 text-xs ${
                      primedCreators.includes(creator.profile?.id)
                        ? "bg-[#4ade80] hover:bg-[#4ade80]/90 text-black"
                        : "bg-[#1a2c42] border border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80]/10"
                    }`}
                  >
                    {primedCreators.includes(creator.profile?.id)
                      ? "PRIMED"
                      : "PRIME"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Expand/Collapse button */}
          <div className="flex justify-center">
            <button
              variant="ghost"
              className="text-[#4ade80] hover:text-[#4ade80]/90 flex items-center gap-2"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  SEE LESS
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  SEE MORE
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// Mock data for creators
// const creators = Array.from({ length: 20 }, (_, i) => ({
//   id: i + 1,
//   name: "Sunny Richy",
//   videos: 10,
//   primers: 10,
//   imageUrl: "/svgicon.jpeg",
// }));
