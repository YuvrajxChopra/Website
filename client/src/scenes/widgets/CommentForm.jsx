import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, useTheme } from "@mui/material";

const CommentForm = ({ isOpen, postId, onClose }) => {
  const [comment, setComment] = useState("");
  const theme = useTheme();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // You can perform any action here, like sending the comment to the server
    // For now, let's just log it to the console
    console.log("Comment submitted:", comment);

    // Clear the comment field
    setComment("");

    // Close the comment form
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Leave a Comment</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="comment"
          label="Your Comment"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={comment}
          onChange={handleCommentChange}
          variant="outlined"
          sx={{ mb: theme.spacing(2) }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleCommentSubmit} color="primary">
          Comment
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommentForm;