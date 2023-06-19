import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { PostDto } from "components/Post/redux/PostSlice";

type Props = PostDto & {
  onLike: () => void;
  onComment: () => void;
};

export default function PostCard({
  onLike,
  onComment,
  id,
  postText,
  problemsCategory,
  likes,
  comments,
}: Props) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Story
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={onLike}>
          <FavoriteIcon color="error" /> <Typography>{likes}</Typography>
        </IconButton>
        <IconButton aria-label="share" onClick={onComment}>
          <ChatBubbleIcon color="info" />
          <Typography>{comments}</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
