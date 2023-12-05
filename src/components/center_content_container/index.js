import { Stack } from "@mui/material"
import { useWindowDimensions } from "../../utils/hooks/windows_dimension_hook"

export const Center_Content_Container = ({ children }) => {
    const { width, height } = useWindowDimensions()
    return <Stack sx={{minHeight:height}} justifyContent='center' alignItems='center' >{children}</Stack>
}