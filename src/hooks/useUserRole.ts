import { useUser } from "@clerk/nextjs"
//import { getUserByClerkId } from './../../convex/users';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";


export const useUserRole = () => {
    const { user } = useUser();

    const userData = useQuery(api.users.getUserByClerkId, {
        clerkId: user?.id || "", //"" means undefined
    });

    const isLoading = userData === undefined;

    return {
        isLoading,
        isInterviewer: userData?.role === "interviewer",
        isCandidate: userData?.role === "candidate",
    };
};