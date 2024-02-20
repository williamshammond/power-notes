import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
    readonly path: string;
    readonly sectionTitle: string;
    readonly sectionInformation: string;
}

export function HomeSectionCard({
    path,
    sectionInformation,
    sectionTitle,
}: Props) {
    return (
        <Link to={path} style={{ textDecoration: "none" }}>
            <Card sx={{ maxWidth: 345, minHeight: 500 }}>
                <CardActionArea
                    sx={{
                        maxWidth: 345,
                        minHeight: 500,
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <CardContent
                        sx={{
                            maxWidth: 345,
                            minHeight: 500,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "top",
                        }}
                    >
                        <Typography
                            sx={{ mt: 10, mb: 5 }}
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {sectionTitle}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {sectionInformation}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
