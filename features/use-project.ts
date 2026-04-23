import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function useCreateProject() {
  const router = useRouter()
  return useMutation({
    mutationFn: async (prompt: string) =>
      await axios
        .post("/api/project", {
          prompt,
        })
        .then((res) => res.data),

    onSuccess: (data) => {
      router.push(`/project/${data.data.id}`)
    },
    onError: (error) => {
      console.error("Error creating project:", error)
      toast.error("Failed to create project. Please try again.")
    },
  })
}

export const useGetProjects = (userId?: string) => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("/api/project")
      return res.data
    },
    enabled: !!userId,
  })
}
