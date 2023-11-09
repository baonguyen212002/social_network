import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  TextField,
} from "@mui/material";
import { IconPrev } from "../icons/ic_prev";

const Dropzone = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [isDiscardDialogOpen, setIsDiscardDialogOpen] = useState(false);
  const [isCaptionVisible, setIsCaptionVisible] = useState(false);
  const [isPostButton, setIsPostButton] = useState(false);
  const [caption, setCaption] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const images = acceptedFiles.filter((file) =>
      file.type.startsWith("image/")
    );
    const videos = acceptedFiles.filter((file) =>
      file.type.startsWith("video/")
    );

    setSelectedImages(
      images.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
    setSelectedVideos(
      videos.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
  }, []);

  const openDiscardDialog = () => {
    setIsDiscardDialogOpen(true);
  };

  const closeDiscardDialog = () => {
    setIsDiscardDialogOpen(false);
  };

  const clearSelection = () => {
    closeDiscardDialog();
    setSelectedImages([]);
    setSelectedVideos([]);
    setIsCaptionVisible(false);
    setCaption("");
    setIsPostButton(false);
  };

  const handleNext = () => {
    // Add logic for "Next" button
    setIsCaptionVisible(true);
    setIsPostButton(true);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const selectedImagesRender = selectedImages?.map((file, index) => (
    <div key={index}>
      <img src={file.preview} style={{ width: "250px" }} alt="" srcSet="" />
    </div>
  ));

  const selectedVideosRender = selectedVideos?.map((file, index) => (
    <div key={index}>
      <video width="250" height="150" controls>
        <source src={file.preview} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ));

  return (
    <div className="grid justify-center">
      {(selectedImages.length > 0 || selectedVideos.length > 0) ? (
        <div className="grid grid-rows-3">
          <div className="row-span-1">
            <div className="flex justify-between border-b-[1px]">
              <div  onClick={openDiscardDialog} >
                <IconPrev/>
              </div>
              <div>
                <Typography>Crop</Typography>
              </div>
              <div>
                <button type="button" onClick={handleNext}>
                  {isPostButton ? "Post" : "Next"}
                </button>
              </div>
            </div>
          </div>
          <div className="row-span-2 flex">
            {selectedImagesRender}
            {selectedVideosRender}
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          style={{
            cursor: "pointer",
            borderRadius: "8px",
            color: "white",
            textAlign: "center",
            width: "200px",
          }}
          className="bg-blue-500 border-none"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <button
              style={{
                padding: "7px 16px",
              }}
            >
              Select from computer
            </button>
          )}
        </div>
      )}

      {/* Discard Dialog */}
      <Dialog open={isDiscardDialogOpen} onClose={closeDiscardDialog}>
        <DialogContent>
          <Typography>
            Are you sure you want to discard images and videos?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDiscardDialog}>Cancel</Button>
          <Button onClick={clearSelection}>Discard</Button>
        </DialogActions>
      </Dialog>

      {/* Caption */}
      <div
        style={{
          display: isCaptionVisible ? "block" : "none",
          padding: "16px",
        }}
      >
        <TextField
          label="Caption"
          variant="outlined"
          fullWidth
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Dropzone;
