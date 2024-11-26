(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "paddingRight": 0,
 "definitions": [{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 14.41,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_42E8050B_5B08_8107_41C3_AA0B1B31E0D7",
 "yaw": 175.14,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_42E8050B_5B08_8107_41C3_AA0B1B31E0D7_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_42E8050B_5B08_8107_41C3_AA0B1B31E0D7_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": 1.35,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52260D8F_6CB1_3589_41BC_06D29E4B30B6",
 "initialPosition": {
  "yaw": -104.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52B30C59_6CB1_3A96_41C6_4D2531CDEFC3",
 "initialPosition": {
  "yaw": 44.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_50A737FB_6CB1_358A_41D7_047E5C9D7305",
 "initialPosition": {
  "yaw": 121.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "id": "album_514D62E1_5D80_44CF_41C4_90CB1C672CE3",
 "width": 750,
 "label": "IMG20241117122700",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_514D62E1_5D80_44CF_41C4_90CB1C672CE3.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_514D62E1_5D80_44CF_41C4_90CB1C672CE3_t.jpg",
 "height": 1000
},
{
 "duration": 5000,
 "id": "album_562F3850_5D80_C3CD_41D4_497E6256FFA8",
 "width": 1000,
 "label": "IMG20241117122857",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_562F3850_5D80_C3CD_41D4_497E6256FFA8.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_562F3850_5D80_C3CD_41D4_497E6256FFA8_t.jpg",
 "height": 750
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 10.88,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4E1FCB0A_5B09_8101_41C0_2CAF7487B382",
 "yaw": -175.91,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4E1FCB0A_5B09_8101_41C0_2CAF7487B382_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 3.29,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_420CAA4A_5B79_8301_41B3_7FE8FCEB8358_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_420CAA4A_5B79_8301_41B3_7FE8FCEB8358_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_420CAA4A_5B79_8301_41B3_7FE8FCEB8358_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_420CAA4A_5B79_8301_41B3_7FE8FCEB8358_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4CE7D30D_5B09_8103_41D4_5B401A416F70"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 4.85,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4817A72D_5B19_8100_41C7_E3C55FA93148",
 "yaw": 50.39,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4817A72D_5B19_8100_41C7_E3C55FA93148_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 13.73,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5029E8DF_6CB1_3B8A_41D8_1190C3B6325C",
 "initialPosition": {
  "yaw": -91.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_124038_00_070",
 "id": "panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "gyroscopeEnabled": true
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_125455_00_089",
 "id": "panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_t.jpg"
  }
 ],
 "label": "IMG_20241117_123407_00_065",
 "id": "panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6",
 "hfov": 360,
 "overlays": [
  "this.overlay_586B1095_6C91_4B99_418F_0D287033E241",
  "this.overlay_587E01FE_6C93_4D8B_41D4_0045DE9C86CC",
  "this.overlay_5BA60453_6C93_4A9A_41D8_10A9F1FE9834"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 36.13,
   "yaw": -140.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 110.74,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4E58E27C_5B09_8301_41C0_F8CCA4564AAC",
 "yaw": -52.66,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4E58E27C_5B09_8301_41C0_F8CCA4564AAC_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 5.34,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_4E6F2130_5B19_8100_41A1_8BBCF0A6D1D2_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4E6F2130_5B19_8100_41A1_8BBCF0A6D1D2_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4E6F2130_5B19_8100_41A1_8BBCF0A6D1D2_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4E6F2130_5B19_8100_41A1_8BBCF0A6D1D2_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4FD4F048_5B08_7F01_41D0_FDFBCFA23F9B"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_504BD8B0_6CB1_3B96_41C9_622D94E79BB5",
 "initialPosition": {
  "yaw": -53.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "id": "album_50013AA1_5D80_474F_41C9_C1CFC2898A3D",
 "width": 750,
 "label": "IMG20241117122705",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_50013AA1_5D80_474F_41C9_C1CFC2898A3D.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_50013AA1_5D80_474F_41C9_C1CFC2898A3D_t.jpg",
 "height": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_43DD476D_5B7F_8103_41D3_A311D548C0ED_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_43DD476D_5B7F_8103_41D3_A311D548C0ED_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_43DD476D_5B7F_8103_41D3_A311D548C0ED_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_43DD476D_5B7F_8103_41D3_A311D548C0ED_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_41C4EB29_5B08_8103_41D6_61459E2B9D43"
},
{
 "levels": [
  {
   "url": "media/popup_43B2629C_5B08_8330_41BE_8F037CF5AD21_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_43B2629C_5B08_8330_41BE_8F037CF5AD21_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_43B2629C_5B08_8330_41BE_8F037CF5AD21_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_43B2629C_5B08_8330_41BE_8F037CF5AD21_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4CE2A31D_5B09_8103_41B9_09062359CDC4"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 5.76,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_438D9F8F_5B77_8100_41BE_07906C4C2BF8",
 "yaw": -102.02,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_438D9F8F_5B77_8100_41BE_07906C4C2BF8_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -0.01,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_4D86E47C_5B08_8701_41D1_D2E6AA7FFB82_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4D86E47C_5B08_8701_41D1_D2E6AA7FFB82_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4D86E47C_5B08_8701_41D1_D2E6AA7FFB82_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4D86E47C_5B08_8701_41D1_D2E6AA7FFB82_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4D75F02A_5B09_9F01_4188_43C9A53645DF"
},
{
 "levels": [
  {
   "url": "media/popup_4253B66B_5B09_8300_4193_A42F95294BBE_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_4253B66B_5B09_8300_4193_A42F95294BBE_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_4253B66B_5B09_8300_4193_A42F95294BBE_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_4253B66B_5B09_8300_4193_A42F95294BBE_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4CE2331D_5B09_8103_41D6_87F2B89B28BA"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5376CA1F_6CB1_3E8A_41D8_CB7E3747E0A7",
 "initialPosition": {
  "yaw": 30.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_76BCCAFF_6C91_7F8A_41C6_C06980C40C4B_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_76BCCAFF_6C91_7F8A_41C6_C06980C40C4B_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_76BCCAFF_6C91_7F8A_41C6_C06980C40C4B_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_76BCCAFF_6C91_7F8A_41C6_C06980C40C4B_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4F23D0B9_6CB1_CB96_41C1_7ABEAC5804F4"
},
{
 "duration": 5000,
 "id": "album_50D0A6FA_5D81_CCBD_41CB_9220EBC232DF",
 "width": 750,
 "label": "IMG20241117122602",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_50D0A6FA_5D81_CCBD_41CB_9220EBC232DF.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_50D0A6FA_5D81_CCBD_41CB_9220EBC232DF_t.jpg",
 "height": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5344AA53_6CB1_3E9A_41D8_5CE498859764",
 "initialPosition": {
  "yaw": -61.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "id": "album_51D30286_5D81_C754_41AE_B5998DEBD731",
 "width": 750,
 "label": "IMG20241117122646",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_51D30286_5D81_C754_41AE_B5998DEBD731.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_51D30286_5D81_C754_41AE_B5998DEBD731_t.jpg",
 "height": 1000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_124330_00_074",
 "id": "panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_t.jpg"
},
{
 "duration": 5000,
 "id": "album_560A08E7_5D80_44D3_41AA_DD94AB8B0729",
 "width": 1000,
 "label": "IMG20241117122801",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_560A08E7_5D80_44D3_41AA_DD94AB8B0729.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_560A08E7_5D80_44D3_41AA_DD94AB8B0729_t.jpg",
 "height": 750
},
{
 "items": [
  {
   "camera": "this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_camera",
   "media": "this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_camera",
   "media": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_camera",
   "media": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_camera",
   "media": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_camera",
   "media": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_camera",
   "media": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_camera",
   "media": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_camera",
   "media": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_camera",
   "media": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_camera",
   "media": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_camera",
   "media": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_camera",
   "media": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_camera",
   "media": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_camera",
   "media": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_camera",
   "media": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_camera",
   "media": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_camera",
   "media": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.album_43124356_5B79_8101_41CB_AE190C4ECF93",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "camera": "this.panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_camera",
   "media": "this.panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_camera",
   "media": "this.panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_camera",
   "media": "this.panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7149328F_6D97_4F89_41C0_24BF1D861770_camera",
   "media": "this.panorama_7149328F_6D97_4F89_41C0_24BF1D861770",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_camera",
   "media": "this.panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71482756_6D97_D69B_41D5_38602BB100D5_camera",
   "media": "this.panorama_71482756_6D97_D69B_41D5_38602BB100D5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71747066_6D97_4ABA_41D4_B3F553963288_camera",
   "media": "this.panorama_71747066_6D97_4ABA_41D4_B3F553963288",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7175092C_6D97_7A8F_41D4_558522740C6F_camera",
   "media": "this.panorama_7175092C_6D97_7A8F_41D4_558522740C6F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_camera",
   "media": "this.panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_camera",
   "media": "this.panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_camera",
   "media": "this.panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_camera",
   "media": "this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_camera",
   "media": "this.panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71767D99_6D91_D596_41D4_402281570AAA_camera",
   "media": "this.panorama_71767D99_6D91_D596_41D4_402281570AAA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_camera",
   "media": "this.panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_camera",
   "media": "this.panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 17.83,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_420CAA4A_5B79_8301_41B3_7FE8FCEB8358",
 "yaw": -3.88,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_420CAA4A_5B79_8301_41B3_7FE8FCEB8358_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 12.25,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5390A9D1_6CB1_3D96_41D6_5166AA7BF1CD",
 "initialPosition": {
  "yaw": 114.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 19.23,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4FE465EC_5B0B_8101_41C6_4A65050C37B4",
 "yaw": 94.88,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4FE465EC_5B0B_8101_41C6_4A65050C37B4_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 9.87,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53A2899D_6CB1_3D8E_41D6_230896A3B8CF",
 "initialPosition": {
  "yaw": -66.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "id": "album_5176451B_5D80_CD73_41B7_C20CDA59FA7E",
 "width": 750,
 "label": "IMG20241117122908",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_5176451B_5D80_CD73_41B7_C20CDA59FA7E.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_5176451B_5D80_CD73_41B7_C20CDA59FA7E_t.jpg",
 "height": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_533AAAF5_6CB1_3F9E_41C3_20A5F39FF22F",
 "initialPosition": {
  "yaw": 14.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 6.14,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4224BE42_6CF3_56FB_41B3_0C61170A95AA",
 "yaw": -120.73,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4224BE42_6CF3_56FB_41B3_0C61170A95AA_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_4224BE42_6CF3_56FB_41B3_0C61170A95AA_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -1.15,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_camera",
 "initialPosition": {
  "yaw": -79.24,
  "class": "PanoramaCameraPosition",
  "pitch": 1.13
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_505BE8CF_6CB1_3B89_4190_74ACF9093EA3",
 "initialPosition": {
  "yaw": 114.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 10.63,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_43838DD6_5B08_8101_41C6_A4EFA06680FF",
 "yaw": -136.16,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_43838DD6_5B08_8101_41C6_A4EFA06680FF_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 0.96,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 7.02,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_45AC9C90_5B08_8701_41B4_ED2856FD69B1",
 "yaw": -143.46,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_45AC9C90_5B08_8701_41B4_ED2856FD69B1_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_45AC9C90_5B08_8701_41B4_ED2856FD69B1_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": 10.78,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_500E0903_6CB1_3A7A_41DA_3731D02FF3CF",
 "initialPosition": {
  "yaw": 72.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_510736EC_6CB1_378E_41BE_A542727000F7",
 "initialPosition": {
  "yaw": 43.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_t.jpg"
  }
 ],
 "label": "IMG_20241117_123148_00_061",
 "id": "panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6",
 "hfov": 360,
 "overlays": [
  "this.overlay_46593E66_6C97_36BA_41C3_D0E94016A59B",
  "this.overlay_59CF9170_6C91_CA96_41A1_721E380CBBDB",
  "this.overlay_4736B8FB_6C93_FB8A_41D0_DEE0F08F9A30",
  "this.overlay_59E498CC_6C91_7B8E_4190_1A1935B7CF00"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -135.5,
   "yaw": 58.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549"
  },
  {
   "backwardYaw": -135.5,
   "yaw": 57.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549"
  },
  {
   "backwardYaw": 27.81,
   "yaw": -105.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD"
  },
  {
   "backwardYaw": 27.81,
   "yaw": -105.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_t.jpg"
},
{
 "duration": 5000,
 "id": "album_51EB5093_5D80_434C_41C9_EED8D72293E9",
 "width": 1000,
 "label": "IMG20241117123728",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_51EB5093_5D80_434C_41C9_EED8D72293E9.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_51EB5093_5D80_434C_41C9_EED8D72293E9_t.jpg",
 "height": 750
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_528CFC78_6CB1_3A96_4188_08552E6AB3AE",
 "initialPosition": {
  "yaw": -152.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 8.64,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_43C33617_5B78_830F_41C9_8B473C1F1B5A",
 "yaw": -75.36,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_43C33617_5B78_830F_41C9_8B473C1F1B5A_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 2.37,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "id": "album_53BA4A48_5D81_C7DD_419A_97E8AEBD2925",
 "width": 750,
 "label": "IMG20241117122639",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_53BA4A48_5D81_C7DD_419A_97E8AEBD2925.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_53BA4A48_5D81_C7DD_419A_97E8AEBD2925_t.jpg",
 "height": 1000
},
{
 "duration": 5000,
 "id": "album_43124356_5B79_8101_41CB_AE190C4ECF93_22",
 "width": 3000,
 "label": "IMG20241117125941",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_43124356_5B79_8101_41CB_AE190C4ECF93_22.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_43124356_5B79_8101_41CB_AE190C4ECF93_22_t.jpg",
 "height": 4000
},
{
 "levels": [
  {
   "url": "media/popup_43838DD6_5B08_8101_41C6_A4EFA06680FF_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_43838DD6_5B08_8101_41C6_A4EFA06680FF_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_43838DD6_5B08_8101_41C6_A4EFA06680FF_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_43838DD6_5B08_8101_41C6_A4EFA06680FF_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4CE5231D_5B09_8103_41C1_45502F31D146"
},
{
 "levels": [
  {
   "url": "media/popup_4222099D_6CF1_DD8E_41D6_54876C89ADDD_0_0.jpg",
   "width": 900,
   "class": "ImageResourceLevel",
   "height": 1200
  },
  {
   "url": "media/popup_4222099D_6CF1_DD8E_41D6_54876C89ADDD_0_1.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_4222099D_6CF1_DD8E_41D6_54876C89ADDD_0_2.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_54DBD7B4_6CB1_559E_41DA_0651DFB197FC"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53FC6944_6CB1_3AFE_41CA_17AF3000CB3A",
 "initialPosition": {
  "yaw": -126.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 10.72,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_423C3B4E_6CF0_DE8A_41D8_2F90F7C2CDE6",
 "yaw": 119.4,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_423C3B4E_6CF0_DE8A_41D8_2F90F7C2CDE6_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_423C3B4E_6CF0_DE8A_41D8_2F90F7C2CDE6_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": 3.18,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "id": "album_43124356_5B79_8101_41CB_AE190C4ECF93_23",
 "width": 2240,
 "label": "IMG20241117125958",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_43124356_5B79_8101_41CB_AE190C4ECF93_23.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_43124356_5B79_8101_41CB_AE190C4ECF93_23_t.jpg",
 "height": 3488
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 7.53,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_43B2629C_5B08_8330_41BE_8F037CF5AD21",
 "yaw": -163.41,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_43B2629C_5B08_8330_41BE_8F037CF5AD21_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -0.32,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_camera",
 "initialPosition": {
  "yaw": -53.25,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": 1.43
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_camera",
 "initialPosition": {
  "yaw": 99.17,
  "class": "PanoramaCameraPosition",
  "pitch": 11.85
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 53.32,
   "yaw": 177.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_131145_00_105",
 "id": "panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0",
 "overlays": [
  "this.overlay_411D5621_6C97_56B9_41C9_501DD8485CDB"
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 7.09,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_45942136_6CF1_4A9A_41C3_B59627C47F3A",
 "yaw": -117.47,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_45942136_6CF1_4A9A_41C3_B59627C47F3A_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_45942136_6CF1_4A9A_41C3_B59627C47F3A_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -0.75,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_50E81764_6CB1_36BE_4199_CAAB313382FE",
 "initialPosition": {
  "yaw": 141.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_511C0735_6CB1_369E_41D6_6DF163DD7C84",
 "initialPosition": {
  "yaw": -65.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_t.jpg"
  }
 ],
 "label": "IMG_20241117_121223_00_041",
 "id": "panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
 "hfov": 360,
 "overlays": [
  "this.overlay_540C791C_5AF8_8101_41D1_0F14D61D9A55",
  "this.overlay_4A84305A_5AF9_BF01_4193_96EED714532B",
  "this.overlay_4BF19D28_5B0B_8101_41D4_8D1B620FECC0",
  "this.overlay_74E60D0A_6D77_DA8B_41C9_19323D557B57",
  "this.overlay_4991AFE9_6C9F_35B6_41D3_AC9FCE08C792",
  "this.overlay_48A4FA2A_6CB0_FE8A_41B2_95288E5B0851"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 45.11,
   "yaw": -165.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34"
  },
  {
   "backwardYaw": 113.41,
   "yaw": -38.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8"
  },
  {
   "backwardYaw": 113.41,
   "yaw": -39.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8"
  },
  {
   "backwardYaw": -94.59,
   "yaw": 95.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638"
  },
  {
   "backwardYaw": -54.24,
   "yaw": 126.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925"
  },
  {
   "backwardYaw": -65.92,
   "yaw": 125.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 18.89,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_43DD476D_5B7F_8103_41D3_A311D548C0ED",
 "yaw": 107.91,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_43DD476D_5B7F_8103_41D3_A311D548C0ED_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 5.07,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5272ACFA_6CB1_3B8A_41D6_E74B9C5891B1",
 "initialPosition": {
  "yaw": -121.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_4FE465EC_5B0B_8101_41C6_4A65050C37B4_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4FE465EC_5B0B_8101_41C6_4A65050C37B4_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4FE465EC_5B0B_8101_41C6_4A65050C37B4_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4FE465EC_5B0B_8101_41C6_4A65050C37B4_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4D75B02A_5B09_9F01_418E_3491B361F44B"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_4E7BB5BF_5B08_817F_41AC_CF59CB6FD608_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_4E7BB5BF_5B08_817F_41AC_CF59CB6FD608_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_4E7BB5BF_5B08_817F_41AC_CF59CB6FD608_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_4E7BB5BF_5B08_817F_41AC_CF59CB6FD608_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4D74302A_5B09_9F01_4197_E011B0FC9250"
},
{
 "levels": [
  {
   "url": "media/popup_43C1EEB7_5B78_830F_41A4_C36DF5CE2A8D_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_43C1EEB7_5B78_830F_41A4_C36DF5CE2A8D_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_43C1EEB7_5B78_830F_41A4_C36DF5CE2A8D_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_43C1EEB7_5B78_830F_41A4_C36DF5CE2A8D_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4CE7330D_5B09_8103_41CE_2A500493BDDA"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 4.45,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4EFC6019_5B09_9F03_41C1_162A929A957F",
 "yaw": 54.25,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4EFC6019_5B09_9F03_41C1_162A929A957F_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 11.24,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53D2097E_6CB1_3A8A_41D7_B5EE8604EB79",
 "initialPosition": {
  "yaw": -66.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52405D2C_6CB1_3A8E_41CC_67D6C982369A",
 "initialPosition": {
  "yaw": -121.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53189B4C_6CB1_3E8F_41C2_CEB77A997F9B",
 "initialPosition": {
  "yaw": 42.41,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52DDBC06_6CB1_3A7B_41D3_A47983115745",
 "initialPosition": {
  "yaw": -126.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_4E58E27C_5B09_8301_41C0_F8CCA4564AAC_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4E58E27C_5B09_8301_41C0_F8CCA4564AAC_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4E58E27C_5B09_8301_41C0_F8CCA4564AAC_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4E58E27C_5B09_8301_41C0_F8CCA4564AAC_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4D75002A_5B09_9F01_41D6_A82E31811683"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 5.54,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_45F75832_6CFF_DA9B_4171_3F3147743BA0",
 "yaw": -176.42,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_45F75832_6CFF_DA9B_4171_3F3147743BA0_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_45F75832_6CFF_DA9B_4171_3F3147743BA0_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -1.15,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_532ABAC6_6CB1_3FFA_41C5_539E1E9B8C90",
 "initialPosition": {
  "yaw": -111.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_438D9F8F_5B77_8100_41BE_07906C4C2BF8_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_438D9F8F_5B77_8100_41BE_07906C4C2BF8_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_438D9F8F_5B77_8100_41BE_07906C4C2BF8_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_438D9F8F_5B77_8100_41BE_07906C4C2BF8_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4CE4730D_5B09_8103_41D3_410019F323B1"
},
{
 "levels": [
  {
   "url": "media/popup_4FC5158F_5B08_811F_41CB_B538525E4A84_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4FC5158F_5B08_811F_41CB_B538525E4A84_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4FC5158F_5B08_811F_41CB_B538525E4A84_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4FC5158F_5B08_811F_41CB_B538525E4A84_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4FD5B048_5B08_7F01_41C7_8DEE0D387CF1"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 5.52,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_76F60BEF_6C93_5D89_41D9_72E3BCFE277D",
 "yaw": -159.26,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_76F60BEF_6C93_5D89_41D9_72E3BCFE277D_0_2.jpg",
    "width": 657,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -2.4,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "id": "album_56311D82_5D81_FD4D_41D6_83A5ED1CDEDC",
 "width": 750,
 "label": "IMG20241117122612",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_56311D82_5D81_FD4D_41D6_83A5ED1CDEDC.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_56311D82_5D81_FD4D_41D6_83A5ED1CDEDC_t.jpg",
 "height": 1000
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 10.02,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4565B3F1_6CF1_4D99_41D8_0273F109F938",
 "yaw": -155.67,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4565B3F1_6CF1_4D99_41D8_0273F109F938_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_4565B3F1_6CF1_4D99_41D8_0273F109F938_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -0.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_camera",
 "initialPosition": {
  "yaw": 132.29,
  "class": "PanoramaCameraPosition",
  "pitch": 8.21
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_t.jpg"
  }
 ],
 "label": "IMG_20241117_121513_00_045",
 "id": "panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
 "hfov": 360,
 "overlays": [
  "this.overlay_4F2336D4_5B38_8301_41D2_80B4AA66EBE9",
  "this.overlay_4E9DF921_5B38_8103_41CB_8DA6F38B8708",
  "this.overlay_4EF9AC8F_5B39_871F_41B0_97F75C8EEEFE",
  "this.overlay_4EDC3BE5_5B09_8103_41BD_5607B329450C",
  "this.popup_4E7BB5BF_5B08_817F_41AC_CF59CB6FD608",
  "this.overlay_4E70A6DF_5B0B_8300_41BC_DE31ED7C4F74",
  "this.popup_4FE465EC_5B0B_8101_41C6_4A65050C37B4",
  "this.overlay_4D672ED1_5B08_8303_41A4_A9B24FEE0479",
  "this.popup_4EFC6019_5B09_9F03_41C1_162A929A957F",
  "this.overlay_4D7F147E_5B0F_8701_41D2_D002A22B995C",
  "this.popup_4E74C89D_5B0F_8F03_41BC_69395B5AD558",
  "this.overlay_4E46B68B_5B08_8307_41C2_189A6E91A2E9",
  "this.popup_4D111E89_5B09_8303_41AD_472B559838D5",
  "this.overlay_4EE1A472_5B08_8701_41CB_6892F42A672A",
  "this.popup_4D86E47C_5B08_8701_41D1_D2E6AA7FFB82",
  "this.overlay_4F522767_5B09_810F_41D3_61EDCFB43E37",
  "this.popup_4E58E27C_5B09_8301_41C0_F8CCA4564AAC",
  "this.overlay_4EC8F9E3_5B08_8107_41CA_FA094D5DBDFE",
  "this.overlay_4EA4703D_5B18_9F03_41D5_1E4E9615E8B3",
  "this.overlay_4EA2E96F_5B18_8100_41CF_6115D323D6FE",
  "this.popup_45CECAA7_5B18_830F_41CF_E49703FE993F"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F"
  },
  {
   "backwardYaw": -142.32,
   "yaw": 40.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8"
  },
  {
   "backwardYaw": 39.22,
   "yaw": -149.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6"
  },
  {
   "backwardYaw": 39.22,
   "yaw": -149.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_camera",
 "initialPosition": {
  "yaw": -154.66,
  "class": "PanoramaCameraPosition",
  "pitch": -5.37
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 9.06,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_43F9E0BF_6CF0_CB8A_41D5_40523B168596",
 "yaw": 159.67,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_43F9E0BF_6CF0_CB8A_41D5_40523B168596_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_43F9E0BF_6CF0_CB8A_41D5_40523B168596_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": 0.32,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.23,
   "yaw": 53.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0"
  },
  {
   "backwardYaw": 53.18,
   "yaw": -136.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_71767D99_6D91_D596_41D4_402281570AAA"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_130818_00_102",
 "id": "panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB",
 "overlays": [
  "this.overlay_4EABA306_6C90_CE7A_41B0_FDE11E77E701",
  "this.overlay_4EAB5EF2_6C91_579A_41D0_DC0D4E18E966"
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_t.jpg"
  }
 ],
 "label": "IMG_20241117_123329_00_064",
 "id": "panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549",
 "hfov": 360,
 "overlays": [
  "this.overlay_59B25304_6C9F_CE7E_41D4_A1F418BC8C2C",
  "this.overlay_5892E24A_6C90_CE8B_41CF_C718A8AD0C95",
  "this.overlay_5B6749A9_6C97_5D89_41D8_700E6AE41D02"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -140.37,
   "yaw": 36.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6"
  },
  {
   "backwardYaw": 58.36,
   "yaw": -135.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6"
  },
  {
   "backwardYaw": 58.36,
   "yaw": -135.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_50C5B79D_6CB1_3589_41D8_59B38D276DED",
 "initialPosition": {
  "yaw": -143.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53B019AD_6CB1_3D8E_41D1_B4915C8AA5DF",
 "initialPosition": {
  "yaw": 85.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5097086D_6CB1_3A8E_41C1_A6516ADAB6AA",
 "initialPosition": {
  "yaw": 37.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 16.9,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4E7BB5BF_5B08_817F_41AC_CF59CB6FD608",
 "yaw": 121.66,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4E7BB5BF_5B08_817F_41AC_CF59CB6FD608_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 6.92,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 13.68,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_45CECAA7_5B18_830F_41CF_E49703FE993F",
 "yaw": -150.95,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_45CECAA7_5B18_830F_41CF_E49703FE993F_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_45CECAA7_5B18_830F_41CF_E49703FE993F_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": 31.72,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_71767D99_6D91_D596_41D4_402281570AAA_camera",
 "initialPosition": {
  "yaw": 101.71,
  "class": "PanoramaCameraPosition",
  "pitch": 2.21
 }
},
{
 "duration": 5000,
 "id": "album_560CA2C1_5D80_44CC_4156_46AB2A8F847D",
 "width": 917,
 "label": "IMG20241117123652",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_560CA2C1_5D80_44CC_4156_46AB2A8F847D.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_560CA2C1_5D80_44CC_4156_46AB2A8F847D_t.jpg",
 "height": 589
},
{
 "id": "album_43124356_5B79_8101_41CB_AE190C4ECF93",
 "playList": "this.album_43124356_5B79_8101_41CB_AE190C4ECF93_AlbumPlayList",
 "label": "Photo Album IMG20241117122552",
 "class": "PhotoAlbum",
 "thumbnailUrl": "media/album_43124356_5B79_8101_41CB_AE190C4ECF93_t.png"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_510AD70B_6CB1_368A_41D0_E5D7F4F3A39C",
 "initialPosition": {
  "yaw": -112.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -136.58,
   "yaw": 53.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB"
  },
  {
   "backwardYaw": 67.89,
   "yaw": -101.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_130610_00_098",
 "id": "panorama_71767D99_6D91_D596_41D4_402281570AAA",
 "overlays": [
  "this.overlay_4F24D9A2_6C9F_5DBA_41D8_77835FCB1EDA",
  "this.overlay_4F50FFC8_6C91_75F6_41D0_627E59FAF018"
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_t.jpg"
},
{
 "levels": [
  {
   "url": "media/popup_4E74C89D_5B0F_8F03_41BC_69395B5AD558_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4E74C89D_5B0F_8F03_41BC_69395B5AD558_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4E74C89D_5B0F_8F03_41BC_69395B5AD558_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4E74C89D_5B0F_8F03_41BC_69395B5AD558_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4D75602A_5B09_9F01_41CC_7D18F889BAC5"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_501E5922_6CB1_3ABB_41D7_019B01B5A1E1",
 "initialPosition": {
  "yaw": -49.08,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_538079C1_6CB1_3DF6_41A3_C8E007AE8C00",
 "initialPosition": {
  "yaw": 125.76,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_43C33617_5B78_830F_41C9_8B473C1F1B5A_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_43C33617_5B78_830F_41C9_8B473C1F1B5A_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_43C33617_5B78_830F_41C9_8B473C1F1B5A_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_43C33617_5B78_830F_41C9_8B473C1F1B5A_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4CE4830D_5B09_8103_41BC_4D3FF560B5DB"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_71482756_6D97_D69B_41D5_38602BB100D5_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 21.33,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_76BCCAFF_6C91_7F8A_41C6_C06980C40C4B",
 "yaw": -24.46,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_76BCCAFF_6C91_7F8A_41C6_C06980C40C4B_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -2.43,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "levels": [
  {
   "url": "media/popup_4EFC6019_5B09_9F03_41C1_162A929A957F_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4EFC6019_5B09_9F03_41C1_162A929A957F_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4EFC6019_5B09_9F03_41C1_162A929A957F_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4EFC6019_5B09_9F03_41C1_162A929A957F_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4D75C02A_5B09_9F01_41BB_CDC65D95EB3C"
},
{
 "items": [
  {
   "camera": "this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_camera",
   "media": "this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_camera",
   "media": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_camera",
   "media": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_camera",
   "media": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_camera",
   "media": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_camera",
   "media": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_camera",
   "media": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_camera",
   "media": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_camera",
   "media": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_camera",
   "media": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_camera",
   "media": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_camera",
   "media": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_camera",
   "media": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_camera",
   "media": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_camera",
   "media": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_camera",
   "media": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_camera",
   "media": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.album_43124356_5B79_8101_41CB_AE190C4ECF93",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "camera": "this.panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_camera",
   "media": "this.panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D_camera",
   "media": "this.panorama_71404A81_6D97_3E76_41A2_6D0B70C8268D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_camera",
   "media": "this.panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7149328F_6D97_4F89_41C0_24BF1D861770_camera",
   "media": "this.panorama_7149328F_6D97_4F89_41C0_24BF1D861770",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_camera",
   "media": "this.panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71482756_6D97_D69B_41D5_38602BB100D5_camera",
   "media": "this.panorama_71482756_6D97_D69B_41D5_38602BB100D5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71747066_6D97_4ABA_41D4_B3F553963288_camera",
   "media": "this.panorama_71747066_6D97_4ABA_41D4_B3F553963288",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7175092C_6D97_7A8F_41D4_558522740C6F_camera",
   "media": "this.panorama_7175092C_6D97_7A8F_41D4_558522740C6F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_camera",
   "media": "this.panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82_camera",
   "media": "this.panorama_7173FBA1_6D90_DDB9_41B6_C204EA85EF82",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_camera",
   "media": "this.panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_camera",
   "media": "this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_camera",
   "media": "this.panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_71767D99_6D91_D596_41D4_402281570AAA_camera",
   "media": "this.panorama_71767D99_6D91_D596_41D4_402281570AAA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_camera",
   "media": "this.panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_camera",
   "media": "this.panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 6.47,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_466F8DF2_5B19_8101_41C7_D344294600B6",
 "yaw": -97.38,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_466F8DF2_5B19_8101_41C7_D344294600B6_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_466F8DF2_5B19_8101_41C7_D344294600B6_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": 0.34,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52CE8BD8_6CB1_3D96_41BB_4EC481C9190A",
 "initialPosition": {
  "yaw": 78.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_125007_00_081",
 "id": "panorama_71482756_6D97_D69B_41D5_38602BB100D5",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_71482756_6D97_D69B_41D5_38602BB100D5_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_122248_00_056",
 "id": "panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5075A891_6CB1_3B96_41C7_8FF7A5BD9679",
 "initialPosition": {
  "yaw": -140.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 10.02,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_422DC56A_6CF0_CA8B_41B3_80720CBFBE5C",
 "yaw": -142.48,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_422DC56A_6CF0_CA8B_41B3_80720CBFBE5C_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_422DC56A_6CF0_CA8B_41B3_80720CBFBE5C_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": -0.08,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5292BCA7_6CB1_3BBA_4195_C7043B5B1A70",
 "initialPosition": {
  "yaw": -152.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_t.jpg"
  }
 ],
 "label": "IMG_20241117_123054_00_060",
 "id": "panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD",
 "hfov": 360,
 "overlays": [
  "this.overlay_472FC00E_6C8F_4A8A_41D2_3693B03DFC71",
  "this.overlay_465B653F_6C91_CA8A_41C1_0D44BCE318A7",
  "this.overlay_463D78EB_6C93_3B8A_41C5_10A1F0631E3F",
  "this.overlay_4672FF11_6C91_3696_41D3_6E3F784A43F4"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -58.04,
   "yaw": 114.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8"
  },
  {
   "backwardYaw": -58.04,
   "yaw": 114.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8"
  },
  {
   "backwardYaw": -105.13,
   "yaw": 27.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6"
  },
  {
   "backwardYaw": -105.13,
   "yaw": 27.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_50CE07BD_6CB1_358E_41D0_A02B700E4FD1",
 "initialPosition": {
  "yaw": 99.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_camera",
 "initialPosition": {
  "yaw": -115.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.29
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_50AA680F_6CB1_3A8A_41D9_173B1A18B172",
 "initialPosition": {
  "yaw": 121.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5324FAA7_6CB1_3FBA_41D8_AA752E6B4ED1",
 "initialPosition": {
  "yaw": -84.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 11.74,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_45D4A779_6CF0_D696_41D2_7477ED64FE7A",
 "yaw": -97.64,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_45D4A779_6CF0_D696_41D2_7477ED64FE7A_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_45D4A779_6CF0_D696_41D2_7477ED64FE7A_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": 1.55,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_4E1FCB0A_5B09_8101_41C0_2CAF7487B382_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_4E1FCB0A_5B09_8101_41C0_2CAF7487B382_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_4E1FCB0A_5B09_8101_41C0_2CAF7487B382_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_4E1FCB0A_5B09_8101_41C0_2CAF7487B382_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4FD84048_5B08_7F01_41D2_0E1014BE8A40"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5082684E_6CB1_3A8A_41D6_FC86AB3CCC6E",
 "initialPosition": {
  "yaw": 74.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_125019_00_082",
 "id": "panorama_71747066_6D97_4ABA_41D4_B3F553963288",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_71747066_6D97_4ABA_41D4_B3F553963288_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5354CA72_6CB1_3E9A_41D6_E15666B4DC68",
 "initialPosition": {
  "yaw": -79.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_71747066_6D97_4ABA_41D4_B3F553963288_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "id": "album_53AF3BE1_5D80_C4CC_41D1_FA273835CA7E",
 "width": 1000,
 "label": "IMG20241117122839",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_53AF3BE1_5D80_C4CC_41D1_FA273835CA7E.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_53AF3BE1_5D80_C4CC_41D1_FA273835CA7E_t.jpg",
 "height": 750
},
{
 "duration": 5000,
 "id": "album_511B65DC_5D80_4CF5_41D3_468C8393CBB8",
 "width": 750,
 "label": "IMG20241117122718",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_511B65DC_5D80_4CF5_41D3_468C8393CBB8.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_511B65DC_5D80_4CF5_41D3_468C8393CBB8_t.jpg",
 "height": 1000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_123930_00_069",
 "id": "panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53EEB939_6CB1_3A96_41CB_3115B43196DD",
 "initialPosition": {
  "yaw": -2.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "id": "album_51E31F3A_5D80_5DBD_41D3_59F693DEEBFE",
 "width": 1000,
 "label": "IMG20241117124621",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_51E31F3A_5D80_5DBD_41D3_59F693DEEBFE.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_51E31F3A_5D80_5DBD_41D3_59F693DEEBFE_t.jpg",
 "height": 750
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 33.55,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4876BD63_5B18_8100_41D3_0FEF52DD7019",
 "yaw": -113.72,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4876BD63_5B18_8100_41D3_0FEF52DD7019_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 3.06,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_t.jpg"
  }
 ],
 "label": "IMG_20241117_121848_00_049",
 "id": "panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211",
 "hfov": 360,
 "overlays": [
  "this.overlay_43CF86D6_6CF3_579A_41A1_B8A57D49F578",
  "this.overlay_431972B4_6CF1_4F9E_41AC_35CA956EF494",
  "this.popup_4222099D_6CF1_DD8E_41D6_54876C89ADDD",
  "this.overlay_42A5068E_6CF0_F78A_41AB_9561DF62327E",
  "this.popup_45EBD01E_6CF7_4A8A_41C5_1EE6A08967CE",
  "this.overlay_42AF56CA_6CF7_578A_41D7_6D9DC5AFE6FD",
  "this.popup_45D4A779_6CF0_D696_41D2_7477ED64FE7A",
  "this.overlay_42B86BBA_6CF1_3D8A_4193_0E6CCA2514F6",
  "this.popup_45942136_6CF1_4A9A_41C3_B59627C47F3A",
  "this.overlay_42964573_6CF0_CA9A_41BB_D5F9BB4EBBAD",
  "this.popup_4224BE42_6CF3_56FB_41B3_0C61170A95AA",
  "this.overlay_42A7C175_6CF3_4A9E_41D8_45D5A4F0A26D",
  "this.popup_422DC56A_6CF0_CA8B_41B3_80720CBFBE5C",
  "this.overlay_420052E9_6CF1_CFB6_419D_3C3055B19F53",
  "this.popup_4565B3F1_6CF1_4D99_41D8_0273F109F938",
  "this.overlay_42B58C96_6CFF_7B9A_41CB_1EB763412B6B",
  "this.popup_45F75832_6CFF_DA9B_4171_3F3147743BA0",
  "this.overlay_42DDAA51_6CF1_5E96_41D1_1426459835B2",
  "this.popup_423C3B4E_6CF0_DE8A_41D8_2F90F7C2CDE6",
  "this.overlay_42A18645_6CF3_D6FE_41D5_EC75B940D970",
  "this.popup_43F9E0BF_6CF0_CB8A_41D5_40523B168596",
  "this.overlay_44A68710_6CF1_F696_41D4_17D9B3F2082E"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -51.23,
   "yaw": 118.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6"
  },
  {
   "backwardYaw": 75.88,
   "yaw": -118.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_50F2A783_6CB1_3678_41DA_71276A7459CC",
 "initialPosition": {
  "yaw": -139.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_t.jpg"
  }
 ],
 "label": "IMG_20241117_121407_00_044",
 "id": "panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
 "hfov": 360,
 "overlays": [
  "this.overlay_50EB3E6F_45DC_C7F0_41B9_BE0C4DFD9C4B",
  "this.overlay_5D0D24A5_45B4_7B70_41C4_CE4167EF1FD7",
  "this.overlay_48D8F3C8_5B08_8101_41C7_DE99A4BA54C3",
  "this.overlay_4F5D3DFB_5B08_8107_41D6_72A0792FE4A9",
  "this.popup_4FC5158F_5B08_811F_41CB_B538525E4A84",
  "this.overlay_4F8FD9B9_5B18_8100_41D2_071745088004",
  "this.popup_4E6F2130_5B19_8100_41A1_8BBCF0A6D1D2",
  "this.overlay_48062DDC_5B1F_8101_41D3_648F199A2C8C",
  "this.popup_4817A72D_5B19_8100_41C7_E3C55FA93148",
  "this.overlay_4D1BC8C1_5B1B_8F03_41A1_B93DE3170265",
  "this.popup_4876BD63_5B18_8100_41D3_0FEF52DD7019",
  "this.overlay_4F628B90_5B18_8101_41CE_6C2B50BF3BC1",
  "this.overlay_4F95938F_5B08_8100_41BE_EF92EBBD2735",
  "this.popup_4E1FCB0A_5B09_8101_41C0_2CAF7487B382",
  "this.overlay_4F54EE5C_5B0B_8300_41C6_F734944C39F5",
  "this.popup_4E3F7175_5B08_8103_417A_06FDB4C5AA8B",
  "this.overlay_4F22CCA2_5B38_8700_41D3_BC513BB92FF4",
  "this.overlay_4D22B32F_5B0F_811F_41B6_D8919CA86473",
  "this.overlay_4C89FF00_5B09_8101_41B8_CB1D9623678A",
  "this.popup_45BA98E9_5B09_8F03_41C1_4658B444A2E7",
  "this.popup_45AC9C90_5B08_8701_41B4_ED2856FD69B1",
  "this.overlay_47201CDA_6CF1_DB8A_41D0_704EF0F98032"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 114.76,
   "yaw": -58.04,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD"
  },
  {
   "backwardYaw": -38.8,
   "yaw": 113.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F"
  },
  {
   "backwardYaw": -38.8,
   "yaw": 113.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6"
  },
  {
   "backwardYaw": 40.63,
   "yaw": -142.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_camera",
 "initialPosition": {
  "yaw": -4.16,
  "class": "PanoramaCameraPosition",
  "pitch": 6.93
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_t.jpg"
  }
 ],
 "label": "IMG_20241117_122017_00_052",
 "id": "panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869",
 "hfov": 360,
 "overlays": [
  "this.overlay_45286582_6CF0_CA7A_41D1_043DFDCD3772",
  "this.overlay_44479354_6CF7_4E9F_41C1_33E2B0F826F6"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.9,
   "yaw": 100.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6"
  },
  {
   "backwardYaw": -118.58,
   "yaw": 75.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_t.jpg"
  }
 ],
 "label": "IMG_20241117_121720_00_048",
 "id": "panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
 "hfov": 360,
 "overlays": [
  "this.overlay_4EDE6507_5B18_8100_4191_D6462D27C49F",
  "this.overlay_4266F498_5B1F_8701_41B5_586982964391",
  "this.overlay_4CE2711F_5B79_813F_41C8_A2870A645415",
  "this.overlay_4340E610_5B78_8301_41B2_CD39718EB52B",
  "this.popup_420CAA4A_5B79_8301_41B3_7FE8FCEB8358",
  "this.overlay_434F8175_5B78_8103_41BB_4CF1B037530B",
  "this.popup_43C1EEB7_5B78_830F_41A4_C36DF5CE2A8D",
  "this.overlay_4353010F_5B7B_811F_41CE_9B164FAEDEB5",
  "this.popup_43C33617_5B78_830F_41C9_8B473C1F1B5A",
  "this.overlay_4305503A_5B79_9F01_4190_5CAC0AEC6D4E",
  "this.overlay_437EE5E0_5B77_8100_41C5_68554B72674A",
  "this.popup_438D9F8F_5B77_8100_41BE_07906C4C2BF8",
  "this.overlay_431C16E2_5B08_8301_41B9_00925818E190",
  "this.popup_4391A6FF_5B08_80FF_4187_6EE739909389",
  "this.overlay_431D245A_5B09_8700_41D6_C90C0F815084",
  "this.popup_43838DD6_5B08_8101_41C6_A4EFA06680FF",
  "this.overlay_435ED409_5B0B_8703_41B7_925052CB23AE",
  "this.popup_43B2629C_5B08_8330_41BE_8F037CF5AD21",
  "this.overlay_433D11F9_5B09_8100_41A6_3E0D60D85BF6",
  "this.popup_4253B66B_5B09_8300_4193_A42F95294BBE",
  "this.popup_43DD476D_5B7F_8103_41D3_A311D548C0ED",
  "this.overlay_43F813CB_5B08_8107_41CF_807CB46B0AF6",
  "this.popup_42E8050B_5B08_8107_41C3_AA0B1B31E0D7",
  "this.popup_466F8DF2_5B19_8101_41C7_D344294600B6",
  "this.overlay_429C0181_6CF1_4A76_41D8_7EC710EA0467",
  "this.overlay_44368C6E_6CF3_5A8A_41A4_8E1612D5ED28"
 ],
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -149.78,
   "yaw": 39.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78"
  },
  {
   "backwardYaw": -149.78,
   "yaw": 38.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78"
  },
  {
   "backwardYaw": 118.26,
   "yaw": -51.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211"
  },
  {
   "backwardYaw": 100.85,
   "yaw": -80.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_536679E0_6CB1_3DB7_419D_96E4F7B04838",
 "initialPosition": {
  "yaw": 30.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_camera",
 "initialPosition": {
  "yaw": 99.93,
  "class": "PanoramaCameraPosition",
  "pitch": 8.39
 }
},
{
 "levels": [
  {
   "url": "media/popup_4817A72D_5B19_8100_41C7_E3C55FA93148_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4817A72D_5B19_8100_41C7_E3C55FA93148_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4817A72D_5B19_8100_41C7_E3C55FA93148_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4817A72D_5B19_8100_41C7_E3C55FA93148_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4FDBF048_5B08_7F01_41C9_E783C3002232"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_50D3B7DC_6CB1_358E_41A0_25A49B9A6B2B",
 "initialPosition": {
  "yaw": 61.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "id": "album_50CF2F00_5D80_BD4D_41D0_BC98E22A8B82",
 "width": 1000,
 "label": "IMG20241117122831",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_50CF2F00_5D80_BD4D_41D0_BC98E22A8B82.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_50CF2F00_5D80_BD4D_41D0_BC98E22A8B82_t.jpg",
 "height": 750
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 13.03,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4E3F7175_5B08_8103_417A_06FDB4C5AA8B",
 "yaw": 172.96,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4E3F7175_5B08_8103_417A_06FDB4C5AA8B_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 8.28,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "duration": 5000,
 "id": "album_569E8B41_5D80_C5CC_41B3_771DF09DE4F5",
 "width": 1000,
 "label": "IMG20241117122848",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_569E8B41_5D80_C5CC_41B3_771DF09DE4F5.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_569E8B41_5D80_C5CC_41B3_771DF09DE4F5_t.jpg",
 "height": 750
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -77.06,
   "yaw": 156.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34"
  },
  {
   "backwardYaw": -101.17,
   "yaw": 67.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_71767D99_6D91_D596_41D4_402281570AAA"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_130447_00_097",
 "id": "panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC",
 "overlays": [
  "this.overlay_4C92F9B3_6C93_3D99_41D8_F693FB9F1AAF",
  "this.overlay_4F79DD88_6C91_5A76_41D7_9F5AE113946E"
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_125203_00_085",
 "id": "panorama_7175092C_6D97_7A8F_41D4_558522740C6F",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_7175092C_6D97_7A8F_41D4_558522740C6F_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_124529_00_077",
 "id": "panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_7176C6E8_6D97_77B6_41D3_5E2A56C81AA2_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7175092C_6D97_7A8F_41D4_558522740C6F_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 6.73,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4253B66B_5B09_8300_4193_A42F95294BBE",
 "yaw": -160.11,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4253B66B_5B09_8300_4193_A42F95294BBE_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": -0.67,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 20.21,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4FC5158F_5B08_811F_41CB_B538525E4A84",
 "yaw": 25.88,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4FC5158F_5B08_811F_41CB_B538525E4A84_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 8.4,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_4D111E89_5B09_8303_41AD_472B559838D5_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4D111E89_5B09_8303_41AD_472B559838D5_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4D111E89_5B09_8303_41AD_472B559838D5_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4D111E89_5B09_8303_41AD_472B559838D5_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4D74102A_5B09_9F01_41B7_59403A7501DF"
},
{
 "levels": [
  {
   "url": "media/popup_4876BD63_5B18_8100_41D3_0FEF52DD7019_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4876BD63_5B18_8100_41D3_0FEF52DD7019_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4876BD63_5B18_8100_41D3_0FEF52DD7019_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4876BD63_5B18_8100_41D3_0FEF52DD7019_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4FDA0048_5B08_7F01_41D6_27918FA44745"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 14.1,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_45BA98E9_5B09_8F03_41C1_4658B444A2E7",
 "yaw": -7.04,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_45BA98E9_5B09_8F03_41C1_4658B444A2E7_0_0.jpg",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 750
   },
   {
    "url": "media/popup_45BA98E9_5B09_8F03_41C1_4658B444A2E7_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 384
   }
  ]
 },
 "pitch": 13.96,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 95.86,
   "yaw": -94.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F"
  },
  {
   "backwardYaw": 68.6,
   "yaw": -107.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_125917_00_093",
 "id": "panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638",
 "overlays": [
  "this.overlay_76540FD7_6C97_5599_41D5_A4C49ED55BBB",
  "this.overlay_483872C6_6C90_CFFB_41AD_50918042C2E6",
  "this.overlay_49A6FB9F_6C93_7D89_41D4_5E427C0E0ECE",
  "this.popup_76F60BEF_6C93_5D89_41D9_72E3BCFE277D",
  "this.overlay_49CCEEA8_6C91_F7B6_41D1_5D7039003095",
  "this.popup_76BCCAFF_6C91_7F8A_41C6_C06980C40C4B"
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_camera",
 "initialPosition": {
  "yaw": -65.73,
  "class": "PanoramaCameraPosition",
  "pitch": 2.95
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53086B1E_6CB1_3E8A_41D6_7E5904F1FEB2",
 "initialPosition": {
  "yaw": -23.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 2.77,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4D86E47C_5B08_8701_41D1_D2E6AA7FFB82",
 "yaw": 20.35,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4D86E47C_5B08_8701_41D1_D2E6AA7FFB82_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 8.67,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_503848F4_6CB1_3B9E_41B5_5975797ACD33",
 "initialPosition": {
  "yaw": -54.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_50E6D744_6CB1_36FF_41D0_A4C82668A39C",
 "initialPosition": {
  "yaw": 141.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52EE5B75_6CB1_3E9E_41D0_96D18DC75B2F",
 "initialPosition": {
  "yaw": 54.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 9.06,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_43C1EEB7_5B78_830F_41A4_C36DF5CE2A8D",
 "yaw": -37.2,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_43C1EEB7_5B78_830F_41A4_C36DF5CE2A8D_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 3.82,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_53CC4968_6CB1_3AB6_41C6_3419178A277B",
 "initialPosition": {
  "yaw": -134.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_50BF982E_6CB1_3A8B_41D1_B23425ED63DC",
 "initialPosition": {
  "yaw": 74.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "id": "album_51A1C14D_5D81_C5D7_417B_7FB513DC9CE1",
 "width": 900,
 "label": "IMG20241117122552",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_51A1C14D_5D81_C5D7_417B_7FB513DC9CE1.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_51A1C14D_5D81_C5D7_417B_7FB513DC9CE1_t.jpg",
 "height": 1200
},
{
 "duration": 5000,
 "id": "album_50F06F62_5D80_7DCD_41D6_956C0AD0F89D",
 "width": 750,
 "label": "IMG20241117122729",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_50F06F62_5D80_7DCD_41D6_956C0AD0F89D.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_50F06F62_5D80_7DCD_41D6_956C0AD0F89D_t.jpg",
 "height": 1000
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 10.22,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4391A6FF_5B08_80FF_4187_6EE739909389",
 "yaw": -122.37,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4391A6FF_5B08_80FF_4187_6EE739909389_0_2.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 1.05,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_4391A6FF_5B08_80FF_4187_6EE739909389_0_0.jpg",
   "width": 3000,
   "class": "ImageResourceLevel",
   "height": 4000
  },
  {
   "url": "media/popup_4391A6FF_5B08_80FF_4187_6EE739909389_0_1.jpg",
   "width": 1536,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_4391A6FF_5B08_80FF_4187_6EE739909389_0_2.jpg",
   "width": 768,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_4391A6FF_5B08_80FF_4187_6EE739909389_0_3.jpg",
   "width": 384,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4CE5D31D_5B09_8100_41C3_B127244EE334"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_124208_00_073",
 "id": "panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 2.38,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4E74C89D_5B0F_8F03_41BC_69395B5AD558",
 "yaw": 48.14,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4E74C89D_5B0F_8F03_41BC_69395B5AD558_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 8.84,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 88.66,
   "yaw": -125.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34"
  },
  {
   "backwardYaw": 125.69,
   "yaw": -65.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F"
  },
  {
   "backwardYaw": -107.55,
   "yaw": 68.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638"
  },
  {
   "backwardYaw": 130.92,
   "yaw": -65.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_125643_00_090",
 "id": "panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7",
 "overlays": [
  "this.overlay_744A01C9_6D71_CD89_41CF_BF1A5E570232",
  "this.overlay_77C0DB78_6C8F_DE96_41C3_F2A009D0FB99",
  "this.overlay_774A0F59_6C90_D696_41CC_86299B4A5E1A",
  "this.overlay_492C5937_6C93_3A9A_41D1_DF6D1781375D"
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_122111_00_053",
 "id": "panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_camera",
 "initialPosition": {
  "yaw": -86.73,
  "class": "PanoramaCameraPosition",
  "pitch": -13.07
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -165.58,
   "yaw": 45.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F"
  },
  {
   "backwardYaw": 156.96,
   "yaw": -77.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC"
  },
  {
   "backwardYaw": -137.59,
   "yaw": 68.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925"
  },
  {
   "backwardYaw": -125.13,
   "yaw": 88.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7"
  }
 ],
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_130221_00_094",
 "id": "panorama_717E8DD0_6D91_5596_41D0_2F203B050B34",
 "overlays": [
  "this.overlay_48B7DD3F_6C97_5A8A_41D8_6BFFA21CAF7B",
  "this.overlay_48B98592_6C91_759A_41D0_F5D296370057",
  "this.overlay_48BB5360_6C93_4EB6_41D6_CBD940FFD2E6",
  "this.overlay_4F36A2D6_6C91_4F9B_41D6_738723A32959"
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_t.jpg"
},
{
 "levels": [
  {
   "url": "media/popup_4E3F7175_5B08_8103_417A_06FDB4C5AA8B_0_0.jpg",
   "width": 4000,
   "class": "ImageResourceLevel",
   "height": 3000
  },
  {
   "url": "media/popup_4E3F7175_5B08_8103_417A_06FDB4C5AA8B_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1536
  },
  {
   "url": "media/popup_4E3F7175_5B08_8103_417A_06FDB4C5AA8B_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 768
  },
  {
   "url": "media/popup_4E3F7175_5B08_8103_417A_06FDB4C5AA8B_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 384
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4FDE8048_5B08_7F01_41B7_EDD0C505D6C6"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_t.jpg"
  }
 ],
 "label": "IMG_20241117_120928_00_039",
 "hfov": 360,
 "overlays": [
  "this.overlay_43AFCB22_5B18_8100_41D5_B70ACD9C4B28",
  "this.overlay_48FFD249_6CB0_CEF6_41B9_2F9091229235",
  "this.overlay_4F3F3131_6CB0_CA96_41D9_EF6FE1459C9B",
  "this.overlay_4C69DB9C_6C8F_3D8F_41D9_CC01D82EE888"
 ],
 "id": "panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925",
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 68.6,
   "yaw": -137.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34"
  },
  {
   "backwardYaw": 126.52,
   "yaw": -54.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638"
  },
  {
   "backwardYaw": -65.94,
   "yaw": 130.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_t.jpg"
},
{
 "duration": 5000,
 "id": "album_518FA422_5D80_434D_41CE_BCC55E5255C2",
 "width": 1000,
 "label": "IMG20241117122821",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_518FA422_5D80_434D_41CE_BCC55E5255C2.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_518FA422_5D80_434D_41CE_BCC55E5255C2_t.jpg",
 "height": 750
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 11.73,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4D111E89_5B09_8303_41AD_472B559838D5",
 "yaw": 34.27,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4D111E89_5B09_8303_41AD_472B559838D5_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 6.24,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_124746_00_078",
 "id": "panorama_7149328F_6D97_4F89_41C0_24BF1D861770",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_7149328F_6D97_4F89_41C0_24BF1D861770_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5045D8A1_6CB1_3BB6_41D2_D82C9C0A8F7B",
 "initialPosition": {
  "yaw": -111.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_122333_00_057",
 "id": "panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_t.jpg"
},
{
 "duration": 5000,
 "id": "album_56AB03EB_5D81_C4D3_41AD_A0AEFF45DF72",
 "width": 750,
 "label": "IMG20241117122625",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_56AB03EB_5D81_C4D3_41AD_A0AEFF45DF72.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_56AB03EB_5D81_C4D3_41AD_A0AEFF45DF72_t.jpg",
 "height": 1000
},
{
 "duration": 5000,
 "id": "album_50A55229_5D80_475F_41D0_565E9FE5EEB6",
 "width": 1000,
 "label": "IMG20241117123712",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_50A55229_5D80_475F_41D0_565E9FE5EEB6.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_50A55229_5D80_475F_41D0_565E9FE5EEB6_t.jpg",
 "height": 750
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 15.43,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4E6F2130_5B19_8100_41A1_8BBCF0A6D1D2",
 "yaw": 69,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4E6F2130_5B19_8100_41A1_8BBCF0A6D1D2_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 768
   }
  ]
 },
 "pitch": 23.27,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "levels": [
  {
   "url": "media/popup_76F60BEF_6C93_5D89_41D9_72E3BCFE277D_0_0.jpg",
   "width": 2240,
   "class": "ImageResourceLevel",
   "height": 3488
  },
  {
   "url": "media/popup_76F60BEF_6C93_5D89_41D9_72E3BCFE277D_0_1.jpg",
   "width": 1315,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_76F60BEF_6C93_5D89_41D9_72E3BCFE277D_0_2.jpg",
   "width": 657,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_76F60BEF_6C93_5D89_41D9_72E3BCFE277D_0_3.jpg",
   "width": 328,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_4F2330B9_6CB1_CB96_41D8_F4C684591473"
},
{
 "duration": 5000,
 "id": "album_563E0A17_5D81_C773_41D1_041A7F2B7A33",
 "width": 750,
 "label": "IMG20241117122652",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_563E0A17_5D81_C773_41D1_041A7F2B7A33.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/album_563E0A17_5D81_C773_41D1_041A7F2B7A33_t.jpg",
 "height": 1000
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52FE8BA4_6CB1_3DBE_41D0_B29034CD9E7F",
 "initialPosition": {
  "yaw": 102.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_70425BFB_6D90_FD8A_41AB_1E61286DE3E3_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7149328F_6D97_4F89_41C0_24BF1D861770_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 15.13,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_45EBD01E_6CF7_4A8A_41C5_1EE6A08967CE",
 "yaw": -42.7,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_45EBD01E_6CF7_4A8A_41C5_1EE6A08967CE_0_0.jpg",
    "width": 750,
    "class": "ImageResourceLevel",
    "height": 1000
   },
   {
    "url": "media/popup_45EBD01E_6CF7_4A8A_41C5_1EE6A08967CE_0_1.jpg",
    "width": 384,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "pitch": 4.8,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hfov": 27.3,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_4222099D_6CF1_DD8E_41D6_54876C89ADDD",
 "yaw": 32.35,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_4222099D_6CF1_DD8E_41D6_54876C89ADDD_0_1.jpg",
    "width": 768,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "pitch": 17.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52611CDB_6CB1_3B8A_41D0_070E91E36E86",
 "initialPosition": {
  "yaw": 39.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52ADCC35_6CB1_3A9E_41C8_AAA50DE416E2",
 "initialPosition": {
  "yaw": 44.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_124835_00_080",
 "id": "panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_71480CEF_6D97_DB8A_41D5_F73FE4FB01AA_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024
     },
     {
      "url": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_125333_00_086",
 "id": "panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_7177C1AC_6D97_4D8F_41CF_B4B2150071CE_t.jpg"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_50651881_6CB1_3A76_41D7_DBCB73C8E630",
 "initialPosition": {
  "yaw": -140.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_52505D5B_6CB1_3A8A_41BF_D0AB014E35F2",
 "initialPosition": {
  "yaw": 128.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png"
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "paddingLeft": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "width": 115.05,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "height": 641,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "width": 573,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "top": 15,
 "paddingRight": 0,
 "height": 133,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--STICKER"
 },
 "shadow": false
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 118,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": 0,
 "class": "Container",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--MENU"
 },
 "shadow": false,
 "backgroundOpacity": 0.64
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "bottom": "0%",
 "class": "Container",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photo"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "bottom": "0%",
 "class": "Container",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photoalbum"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "bottom": "0%",
 "class": "Container",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "bottom": "0%",
 "class": "Container",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--LOCATION"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "bottom": "0%",
 "class": "Container",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "bottom": "0%",
 "class": "Container",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "bottom": "0%",
 "class": "Container",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#04A3E1",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "bottom": "0%",
 "class": "Container",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.6
},
{
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingBottom": 0,
 "right": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "bottom": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "class": "UIComponent",
 "paddingTop": 0,
 "data": {
  "name": "UIComponent80898"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0.55
},
{
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingBottom": 0,
 "right": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "borderSize": 0,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "backgroundColor": [],
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "bottom": 0,
 "class": "ZoomImage",
 "paddingTop": 0,
 "data": {
  "name": "ZoomImage80899"
 },
 "shadow": false,
 "visible": false,
 "scaleMode": "custom",
 "backgroundOpacity": 1
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingLeft": 5,
 "pressedIconColor": "#888888",
 "id": "closeButtonPopupPanorama",
 "paddingBottom": 5,
 "iconWidth": 20,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "backgroundOpacity": 0.3,
 "right": 10,
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "iconHeight": 20,
 "borderSize": 0,
 "verticalAlign": "middle",
 "iconColor": "#000000",
 "rollOverIconColor": "#666666",
 "minHeight": 0,
 "top": 10,
 "borderColor": "#000000",
 "paddingRight": 5,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "fontColor": "#FFFFFF",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "class": "CloseButton",
 "gap": 5,
 "fontStyle": "normal",
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "data": {
  "name": "CloseButton80900"
 },
 "shadow": false,
 "visible": false,
 "iconLineWidth": 5,
 "fontWeight": "normal",
 "textDecoration": "none"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "right": 30,
 "propagateClick": true,
 "width": 100,
 "maxHeight": 37,
 "borderSize": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 75,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "bottom": 8,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "backgroundOpacity": 0
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549, this.camera_50C5B79D_6CB1_3589_41D8_59B38D276DED); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5513B6F4_6CB1_579E_41D5_1012BB491697",
   "yaw": -140.37,
   "pitch": -28.94,
   "distance": 100,
   "hfov": 35.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.76,
   "yaw": -140.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0_HS_0_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.94
  }
 ],
 "id": "overlay_586B1095_6C91_4B99_418F_0D287033E241",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.15,
   "yaw": -141.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0_HS_1_1_0_map.gif",
      "width": 110,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -7.76
  }
 ],
 "id": "overlay_587E01FE_6C93_4D8B_41D4_0045DE9C86CC",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5510C6F4_6CB1_579E_41C7_A5981922C381",
   "yaw": -141.09,
   "pitch": -18.79,
   "distance": 100,
   "hfov": 9.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.28,
   "yaw": -141.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.79
  }
 ],
 "id": "overlay_5BA60453_6C93_4A9A_41D8_10A9F1FE9834",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD, this.camera_528CFC78_6CB1_3A96_4188_08552E6AB3AE); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.1,
   "yaw": -105.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0_HS_0_1_0_map.gif",
      "width": 110,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -8.91
  }
 ],
 "id": "overlay_46593E66_6C97_36BA_41C3_D0E94016A59B",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD, this.camera_5292BCA7_6CB1_3BBA_4195_C7043B5B1A70); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_550D86F4_6CB1_579E_41D0_2F31838D1C56",
   "yaw": -105.01,
   "pitch": -19.36,
   "distance": 100,
   "hfov": 11.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.59,
   "yaw": -105.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.36
  }
 ],
 "id": "overlay_59CF9170_6C91_CA96_41A1_721E380CBBDB",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549, this.camera_52ADCC35_6CB1_3A9E_41C8_AAA50DE416E2); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.5,
   "yaw": 58.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0_HS_2_1_0_map.gif",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.43
  }
 ],
 "id": "overlay_4736B8FB_6C93_FB8A_41D0_DEE0F08F9A30",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549, this.camera_52B30C59_6CB1_3A96_41C6_4D2531CDEFC3); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_550D26F4_6CB1_579E_41A3_0D884E44D27A",
   "yaw": 57.81,
   "pitch": -17.72,
   "distance": 100,
   "hfov": 11.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.96,
   "yaw": 57.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.72
  }
 ],
 "id": "overlay_59E498CC_6C91_7B8E_4190_1A1935B7CF00",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB, this.camera_52DDBC06_6CB1_3A7B_41D3_A47983115745); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5515D703_6CB1_567A_41BE_9D7B220C02B8",
   "yaw": 177.23,
   "pitch": -18.32,
   "distance": 100,
   "hfov": 14.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 177.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.32
  }
 ],
 "id": "overlay_411D5621_6C97_56B9_41C9_501DD8485CDB",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8, this.camera_53D2097E_6CB1_3A8A_41D7_B5EE8604EB79); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C87C4B5_5E8F_CCB7_41D5_A67D7F8EBC61",
   "yaw": -38.8,
   "pitch": -39.09,
   "distance": 100,
   "hfov": 17.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.77,
   "yaw": -38.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.09
  }
 ],
 "id": "overlay_540C791C_5AF8_8101_41D1_0F14D61D9A55",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8, this.camera_53A2899D_6CB1_3D8E_41D6_230896A3B8CF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.26,
   "yaw": -39.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_1_HS_1_1_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -9.2
  }
 ],
 "id": "overlay_4A84305A_5AF9_BF01_4193_96EED714532B",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925, this.camera_538079C1_6CB1_3DF6_41A3_C8E007AE8C00); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C8744B5_5E8F_CCB7_41B5_626CB5DAFC7A",
   "yaw": 126.52,
   "pitch": -22.48,
   "distance": 100,
   "hfov": 20.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.52,
   "yaw": 126.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_1_HS_2_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.48
  }
 ],
 "id": "overlay_4BF19D28_5B0B_8101_41D4_8D1B620FECC0",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7, this.camera_5390A9D1_6CB1_3D96_41D6_5166AA7BF1CD); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F94B02D_6CB1_CA89_41D4_3915CCCF2070",
   "yaw": 125.69,
   "pitch": -14.05,
   "distance": 100,
   "hfov": 7.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.77,
   "yaw": 125.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.05
  }
 ],
 "id": "overlay_74E60D0A_6D77_DA8B_41C9_19323D557B57",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638, this.camera_53B019AD_6CB1_3D8E_41D1_B4915C8AA5DF); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F94E02D_6CB1_CA89_41D9_8D23F17524BD",
   "yaw": 95.86,
   "pitch": -4.93,
   "distance": 100,
   "hfov": 6.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.03,
   "yaw": 95.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.93
  }
 ],
 "id": "overlay_4991AFE9_6C9F_35B6_41D3_AC9FCE08C792",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34, this.camera_53CC4968_6CB1_3AB6_41C6_3419178A277B); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F94702D_6CB1_CA89_41C0_8021FCFC8E7E",
   "yaw": -165.58,
   "pitch": -13.01,
   "distance": 100,
   "hfov": 12.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.57,
   "yaw": -165.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0_HS_5_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.01
  }
 ],
 "id": "overlay_48A4FA2A_6CB0_FE8A_41B2_95288E5B0851",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8, this.camera_5097086D_6CB1_3A8E_41C1_A6516ADAB6AA); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C8314B5_5E8F_CCB7_41C0_2D8B97E0B8C3",
   "yaw": 40.63,
   "pitch": -24.24,
   "distance": 100,
   "hfov": 37.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 37.25,
   "yaw": 40.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_0_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.24
  }
 ],
 "id": "overlay_4F2336D4_5B38_8301_41D2_80B4AA66EBE9",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.91,
   "yaw": 74.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_1_1_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -6.02
  }
 ],
 "id": "overlay_4E9DF921_5B38_8103_41CB_8DA6F38B8708",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C8294B5_5E8F_CCB7_41B8_1FFD30C6B564",
   "yaw": 69.79,
   "pitch": -19.35,
   "distance": 50,
   "hfov": 16.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.22,
   "yaw": 69.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_2_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.35
  }
 ],
 "id": "overlay_4EF9AC8F_5B39_871F_41B0_97F75C8EEEFE",
 "data": {
  "label": "Arrow 06a Right"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E7BB5BF_5B08_817F_41AC_CF59CB6FD608, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4D74302A_5B09_9F01_4197_E011B0FC9250, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.48,
   "yaw": 121.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_3_1_0_map.gif",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": 6.92
  }
 ],
 "id": "overlay_4EDC3BE5_5B09_8103_41BD_5607B329450C",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4FE465EC_5B0B_8101_41C6_4A65050C37B4, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4D75B02A_5B09_9F01_418E_3491B361F44B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.98,
   "yaw": 94.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_4_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 189
     }
    ]
   },
   "pitch": 9.87
  }
 ],
 "id": "overlay_4E70A6DF_5B0B_8300_41BC_DE31ED7C4F74",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4EFC6019_5B09_9F03_41C1_162A929A957F, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4D75C02A_5B09_9F01_41BB_CDC65D95EB3C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.07,
   "yaw": 54.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_5_1_0_map.gif",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ]
   },
   "pitch": 11.24
  }
 ],
 "id": "overlay_4D672ED1_5B08_8303_41A4_A9B24FEE0479",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E74C89D_5B0F_8F03_41BC_69395B5AD558, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4D75602A_5B09_9F01_41CC_7D18F889BAC5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.76,
   "yaw": 48.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_6_1_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": 8.84
  }
 ],
 "id": "overlay_4D7F147E_5B0F_8701_41D2_D002A22B995C",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4D111E89_5B09_8303_41AD_472B559838D5, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4D74102A_5B09_9F01_41B7_59403A7501DF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.19,
   "yaw": 34.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_7_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ]
   },
   "pitch": 6.24
  }
 ],
 "id": "overlay_4E46B68B_5B08_8307_41C2_189A6E91A2E9",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4D86E47C_5B08_8701_41D1_D2E6AA7FFB82, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4D75F02A_5B09_9F01_4188_43C9A53645DF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.12,
   "yaw": 20.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_8_1_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 8.67
  }
 ],
 "id": "overlay_4EE1A472_5B08_8701_41CB_6892F42A672A",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E58E27C_5B09_8301_41C0_F8CCA4564AAC, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4D75002A_5B09_9F01_41D6_A82E31811683, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 113.24,
   "yaw": -52.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_9_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 143
     }
    ]
   },
   "pitch": 5.34
  }
 ],
 "id": "overlay_4F522767_5B09_810F_41D3_61EDCFB43E37",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45CECAA7_5B18_830F_41CF_E49703FE993F, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.72,
   "yaw": -150.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_10_1_0_map.gif",
      "width": 198,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 31.72
  }
 ],
 "id": "overlay_4EC8F9E3_5B08_8107_41CA_FA094D5DBDFE",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6, this.camera_50651881_6CB1_3A76_41D7_DBCB73C8E630); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.78,
   "yaw": -149.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_11_1_0_map.gif",
      "width": 122,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -19.06
  }
 ],
 "id": "overlay_4EA4703D_5B18_9F03_41D5_1E4E9615E8B3",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6, this.camera_5075A891_6CB1_3B96_41C7_8FF7A5BD9679); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C8FD4B5_5E8F_CCB7_41D0_09D6DBD28E08",
   "yaw": -149.35,
   "pitch": -44.23,
   "distance": 100,
   "hfov": 24.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.55,
   "yaw": -149.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_12_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.23
  }
 ],
 "id": "overlay_4EA2E96F_5B18_8100_41CF_6115D323D6FE",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_71767D99_6D91_D596_41D4_402281570AAA, this.camera_53FC6944_6CB1_3AFE_41CA_17AF3000CB3A); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4292DBB1_6C91_5D96_41D2_58AA46F4AF99",
   "yaw": -136.58,
   "pitch": -8.51,
   "distance": 100,
   "hfov": 13.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.47,
   "yaw": -136.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.51
  }
 ],
 "id": "overlay_4EABA306_6C90_CE7A_41B0_FDE11E77E701",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0, this.camera_53EEB939_6CB1_3A96_41CB_3115B43196DD); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_55145703_6CB1_567A_41D7_294AC17B15A2",
   "yaw": 53.32,
   "pitch": -5.02,
   "distance": 100,
   "hfov": 48.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 48.52,
   "yaw": 53.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0_HS_1_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.02
  }
 ],
 "id": "overlay_4EAB5EF2_6C91_579A_41D0_DC0D4E18E966",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6, this.camera_5272ACFA_6CB1_3B8A_41D6_E74B9C5891B1); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.27,
   "yaw": -135.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0_HS_0_1_0_map.gif",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -11.8
  }
 ],
 "id": "overlay_59B25304_6C9F_CE7E_41D4_A1F418BC8C2C",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6, this.camera_52405D2C_6CB1_3A8E_41CC_67D6C982369A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_551256F4_6CB1_579E_41D3_7E6903AD95D9",
   "yaw": -135.74,
   "pitch": -28.93,
   "distance": 100,
   "hfov": 16.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.08,
   "yaw": -135.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.93
  }
 ],
 "id": "overlay_5892E24A_6C90_CE8B_41CF_C718A8AD0C95",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6, this.camera_52611CDB_6CB1_3B8A_41D0_070E91E36E86); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_551236F4_6CB1_579E_41CC_8D5748F4B5F3",
   "yaw": 36.13,
   "pitch": -28.63,
   "distance": 100,
   "hfov": 13.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.66,
   "yaw": 36.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0_HS_2_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.63
  }
 ],
 "id": "overlay_5B6749A9_6C97_5D89_41D8_700E6AE41D02",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "items": [
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.61",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.32"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_51A1C14D_5D81_C5D7_417B_7FB513DC9CE1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.68",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.45"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_50D0A6FA_5D81_CCBD_41CB_9220EBC232DF",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.50",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.57"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_56311D82_5D81_FD4D_41D6_83A5ED1CDEDC",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.27"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_56AB03EB_5D81_C4D3_41AD_A0AEFF45DF72",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.74",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.64"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_53BA4A48_5D81_C7DD_419A_97E8AEBD2925",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.67",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.33"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_51D30286_5D81_C754_41AE_B5998DEBD731",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.59",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.28"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_563E0A17_5D81_C773_41D1_041A7F2B7A33",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.59",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.34"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_514D62E1_5D80_44CF_41C4_90CB1C672CE3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.60",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.33"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_50013AA1_5D80_474F_41C9_C1CFC2898A3D",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.28",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_511B65DC_5D80_4CF5_41D3_468C8393CBB8",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_50F06F62_5D80_7DCD_41D6_956C0AD0F89D",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.57",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.35"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_560A08E7_5D80_44D3_41AA_DD94AB8B0729",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.62"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_518FA422_5D80_434D_41CE_BCC55E5255C2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.31"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_50CF2F00_5D80_BD4D_41D0_BC98E22A8B82",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.67",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.68"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_53AF3BE1_5D80_C4CC_41D1_FA273835CA7E",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.69",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.36"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_569E8B41_5D80_C5CC_41B3_771DF09DE4F5",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.63",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.34"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_562F3850_5D80_C3CD_41D4_497E6256FFA8",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.51",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.28"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_5176451B_5D80_CD73_41B7_C20CDA59FA7E",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.54"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_560CA2C1_5D80_44CC_4156_46AB2A8F847D",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.65",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.34"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_50A55229_5D80_475F_41D0_565E9FE5EEB6",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.55",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.39"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_51EB5093_5D80_434C_41C9_EED8D72293E9",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.58",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.53"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_51E31F3A_5D80_5DBD_41D3_59F693DEEBFE",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.49",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.26"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_43124356_5B79_8101_41CB_AE190C4ECF93_22",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.60",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.57"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    }
   },
   "media": "this.album_43124356_5B79_8101_41CB_AE190C4ECF93_23",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_43124356_5B79_8101_41CB_AE190C4ECF93_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC, this.camera_510AD70B_6CB1_368A_41D0_E5D7F4F3A39C); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4291DBB1_6C91_5D96_41A7_7DD513221E45",
   "yaw": -101.17,
   "pitch": -1.7,
   "distance": 100,
   "hfov": 13.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.61,
   "yaw": -101.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.7
  }
 ],
 "id": "overlay_4F24D9A2_6C9F_5DBA_41D8_77835FCB1EDA",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB, this.camera_510736EC_6CB1_378E_41BE_A542727000F7); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42914BB1_6C91_5D96_4198_444D32353050",
   "yaw": 53.18,
   "pitch": -3.97,
   "distance": 100,
   "hfov": 13.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.59,
   "yaw": 53.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.97
  }
 ],
 "id": "overlay_4F50FFC8_6C91_75F6_41D0_627E59FAF018",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8, this.camera_50A737FB_6CB1_358A_41D7_047E5C9D7305); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_550F26F4_6CB1_579E_41D0_58641C67F0E0",
   "yaw": 114.76,
   "pitch": -35.3,
   "distance": 100,
   "hfov": 22.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.23,
   "yaw": 114.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.3
  }
 ],
 "id": "overlay_472FC00E_6C8F_4A8A_41D2_3693B03DFC71",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8, this.camera_50AA680F_6CB1_3A8A_41D9_173B1A18B172); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.64,
   "yaw": 114.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0_HS_1_1_0_map.gif",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -6.05
  }
 ],
 "id": "overlay_465B653F_6C91_CA8A_41C1_0D44BCE318A7",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6, this.camera_50BF982E_6CB1_3A8B_41D1_B23425ED63DC); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.61,
   "yaw": 27.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0_HS_2_1_0_map.gif",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.96
  }
 ],
 "id": "overlay_463D78EB_6C93_3B8A_41C5_10A1F0631E3F",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6, this.camera_5082684E_6CB1_3A8A_41D6_FC86AB3CCC6E); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_550C66F4_6CB1_579E_41C5_503D9D99E386",
   "yaw": 27.06,
   "pitch": -15.04,
   "distance": 100,
   "hfov": 10.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.99,
   "yaw": 27.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.04
  }
 ],
 "id": "overlay_4672FF11_6C91_3696_41D3_6E3F784A43F4",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxHeight": 150,
 "verticalAlign": "middle",
 "width": "12%",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "minHeight": 70,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "14.22%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "minHeight": 50,
 "top": "20%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "bottom": "20%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "14.22%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "top": "20%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "bottom": "20%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxHeight": 150,
 "verticalAlign": "middle",
 "width": "12%",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "minHeight": 70,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "right": 10,
 "propagateClick": false,
 "maxHeight": 60,
 "width": "14.22%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "minHeight": 50,
 "top": "20%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "bottom": "20%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "right": 10,
 "propagateClick": false,
 "maxHeight": 60,
 "width": "14.22%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "top": "20%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "bottom": "20%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "backgroundOpacity": 0
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6, this.camera_52505D5B_6CB1_3A8A_41BF_D0AB014E35F2); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_550B66DF_6CB1_578A_41D3_EF80D797D11C",
   "yaw": 118.26,
   "pitch": -38.47,
   "distance": 100,
   "hfov": 31.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.99,
   "yaw": 118.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_0_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.47
  }
 ],
 "id": "overlay_43CF86D6_6CF3_579A_41A1_B8A57D49F578",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4222099D_6CF1_DD8E_41D6_54876C89ADDD, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_54DBD7B4_6CB1_559E_41DA_0651DFB197FC, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.77,
   "yaw": 32.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_1_1_0_map.gif",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 17.23
  }
 ],
 "id": "overlay_431972B4_6CF1_4F9E_41AC_35CA956EF494",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45EBD01E_6CF7_4A8A_41C5_1EE6A08967CE, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.98,
   "yaw": -42.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_2_1_0_map.gif",
      "width": 160,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 4.8
  }
 ],
 "id": "overlay_42A5068E_6CF0_F78A_41AB_9561DF62327E",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45D4A779_6CF0_D696_41D2_7477ED64FE7A, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.75,
   "yaw": -97.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_3_1_0_map.gif",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 1.55
  }
 ],
 "id": "overlay_42AF56CA_6CF7_578A_41D7_6D9DC5AFE6FD",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45942136_6CF1_4A9A_41C3_B59627C47F3A, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.35,
   "yaw": -117.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_4_1_0_map.gif",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 166
     }
    ]
   },
   "pitch": -0.75
  }
 ],
 "id": "overlay_42B86BBA_6CF1_3D8A_4193_0E6CCA2514F6",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4224BE42_6CF3_56FB_41B3_0C61170A95AA, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.14,
   "yaw": -120.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_5_1_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 147
     }
    ]
   },
   "pitch": -1.15
  }
 ],
 "id": "overlay_42964573_6CF0_CA9A_41BB_D5F9BB4EBBAD",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_422DC56A_6CF0_CA8B_41B3_80720CBFBE5C, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.35,
   "yaw": -142.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_6_1_0_map.gif",
      "width": 162,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -0.08
  }
 ],
 "id": "overlay_42A7C175_6CF3_4A9E_41D8_45D5A4F0A26D",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4565B3F1_6CF1_4D99_41D8_0273F109F938, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.65,
   "yaw": -155.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_7_1_0_map.gif",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -0.23
  }
 ],
 "id": "overlay_420052E9_6CF1_CFB6_419D_3C3055B19F53",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45F75832_6CFF_DA9B_4171_3F3147743BA0, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.75,
   "yaw": -176.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_8_1_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 128
     }
    ]
   },
   "pitch": -1.15
  }
 ],
 "id": "overlay_42B58C96_6CFF_7B9A_41CB_1EB763412B6B",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_423C3B4E_6CF0_DE8A_41D8_2F90F7C2CDE6, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.97,
   "yaw": 119.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_9_1_0_map.gif",
      "width": 160,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.18
  }
 ],
 "id": "overlay_42DDAA51_6CF1_5E96_41D1_1426459835B2",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43F9E0BF_6CF0_CB8A_41D5_40523B168596, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.14,
   "yaw": 159.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_10_1_0_map.gif",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0.32
  }
 ],
 "id": "overlay_42A18645_6CF3_D6FE_41D5_EC75B940D970",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869, this.camera_52260D8F_6CB1_3589_41BC_06D29E4B30B6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_550E16F4_6CB1_579E_41D6_A61C92CC8BE1",
   "yaw": -118.58,
   "pitch": -32.57,
   "distance": 100,
   "hfov": 34.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.43,
   "yaw": -118.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_11_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.57
  }
 ],
 "id": "overlay_44A68710_6CF1_F696_41D4_17D9B3F2082E",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F, this.camera_50E6D744_6CB1_36FF_41D0_A4C82668A39C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "\u0412\u0438\u0439\u0442\u0438"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C8734B5_5E8F_CCB7_41A2_97C42AB1C31A",
   "yaw": 113.41,
   "pitch": -34.86,
   "distance": 100,
   "hfov": 15.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.62,
   "yaw": 113.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.86
  }
 ],
 "id": "overlay_50EB3E6F_45DC_C7F0_41B9_BE0C4DFD9C4B",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F, this.camera_50E81764_6CB1_36BE_4199_CAAB313382FE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "\u0412\u0438\u0439\u0442\u0438"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.81,
   "yaw": 113.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_1_1_0_map.gif",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -11.69
  }
 ],
 "id": "overlay_5D0D24A5_45B4_7B70_41C4_CE4167EF1FD7",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45BA98E9_5B09_8F03_41C1_4658B444A2E7, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.97,
   "yaw": -7.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_2_1_0_map.gif",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 13.96
  }
 ],
 "id": "overlay_48D8F3C8_5B08_8101_41C7_DE99A4BA54C3",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4FC5158F_5B08_811F_41CB_B538525E4A84, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4FD5B048_5B08_7F01_41C7_8DEE0D387CF1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.06,
   "yaw": 25.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_3_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ]
   },
   "pitch": 8.4
  }
 ],
 "id": "overlay_4F5D3DFB_5B08_8107_41D6_72A0792FE4A9",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E6F2130_5B19_8100_41A1_8BBCF0A6D1D2, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4FD4F048_5B08_7F01_41D0_FDFBCFA23F9B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.1,
   "yaw": 69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_4_1_0_map.gif",
      "width": 155,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 23.27
  }
 ],
 "id": "overlay_4F8FD9B9_5B18_8100_41D2_071745088004",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4817A72D_5B19_8100_41C7_E3C55FA93148, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4FDBF048_5B08_7F01_41C9_E783C3002232, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.44,
   "yaw": 50.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_5_1_0_map.gif",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 197
     }
    ]
   },
   "pitch": 13.73
  }
 ],
 "id": "overlay_48062DDC_5B1F_8101_41D3_648F199A2C8C",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4876BD63_5B18_8100_41D3_0FEF52DD7019, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4FDA0048_5B08_7F01_41D6_27918FA44745, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.35,
   "yaw": -113.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_6_1_0_map.gif",
      "width": 145,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.06
  }
 ],
 "id": "overlay_4D1BC8C1_5B1B_8F03_41A1_B93DE3170265",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45AC9C90_5B08_8701_41B4_ED2856FD69B1, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.06,
   "yaw": -143.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_7_1_0_map.gif",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 164
     }
    ]
   },
   "pitch": 10.78
  }
 ],
 "id": "overlay_4F628B90_5B18_8101_41CE_6C2B50BF3BC1",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E1FCB0A_5B09_8101_41C0_2CAF7487B382, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4FD84048_5B08_7F01_41D2_0E1014BE8A40, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.49,
   "yaw": -175.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_8_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.29
  }
 ],
 "id": "overlay_4F95938F_5B08_8100_41BE_EF92EBBD2735",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E3F7175_5B08_8103_417A_06FDB4C5AA8B, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4FDE8048_5B08_7F01_41B7_EDD0C505D6C6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.97,
   "yaw": 172.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_9_1_0_map.gif",
      "width": 140,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 8.28
  }
 ],
 "id": "overlay_4F54EE5C_5B0B_8300_41C6_F734944C39F5",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78, this.camera_50F2A783_6CB1_3678_41DA_71276A7459CC); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C8464B5_5E8F_CCB7_41CA_384D35DB1B86",
   "yaw": -142.32,
   "pitch": -33.03,
   "distance": 100,
   "hfov": 34.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.26,
   "yaw": -142.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_10_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.03
  }
 ],
 "id": "overlay_4F22CCA2_5B38_8700_41D3_BC513BB92FF4",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.33,
   "yaw": -143.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_11_1_0_map.gif",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -8.76
  }
 ],
 "id": "overlay_4D22B32F_5B0F_811F_41B6_D8919CA86473",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C83E4B5_5E8F_CCB7_41C1_D79F48097449",
   "yaw": -142.57,
   "pitch": -18.81,
   "distance": 100,
   "hfov": 11.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.57,
   "yaw": -142.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_12_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.81
  }
 ],
 "id": "overlay_4C89FF00_5B09_8101_41B8_CB1D9623678A",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD, this.camera_511C0735_6CB1_369E_41D6_6DF163DD7C84); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5503A6CF_6CB1_578A_41DA_720456805672",
   "yaw": -58.04,
   "pitch": -10.01,
   "distance": 100,
   "hfov": 13.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.41,
   "yaw": -58.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.01
  }
 ],
 "id": "overlay_47201CDA_6CF1_DB8A_41D0_704EF0F98032",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211, this.camera_50D3B7DC_6CB1_358E_41A0_25A49B9A6B2B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_550FF6F4_6CB1_579E_41D6_D57837C7D3B6",
   "yaw": 75.88,
   "pitch": -35.59,
   "distance": 100,
   "hfov": 33.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.22,
   "yaw": 75.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0_HS_0_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.59
  }
 ],
 "id": "overlay_45286582_6CF0_CA7A_41D1_043DFDCD3772",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6, this.camera_50CE07BD_6CB1_358E_41D0_A02B700E4FD1); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_550F46F4_6CB1_579E_41BF_1631BBC6087B",
   "yaw": 100.85,
   "pitch": -19.54,
   "distance": 100,
   "hfov": 38.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 38.5,
   "yaw": 100.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0_HS_1_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.54
  }
 ],
 "id": "overlay_44479354_6CF7_4E9F_41C1_33E2B0F826F6",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78, this.camera_536679E0_6CB1_3DB7_419D_96E4F7B04838); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.06,
   "yaw": 39.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_0_1_0_map.gif",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -11.87
  }
 ],
 "id": "overlay_4EDE6507_5B18_8100_4191_D6462D27C49F",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78, this.camera_5376CA1F_6CB1_3E8A_41D8_CB7E3747E0A7); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C8F74B5_5E8F_CCB7_41CC_B5720EB9FA74",
   "yaw": 38.82,
   "pitch": -32.97,
   "distance": 100,
   "hfov": 19.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.84,
   "yaw": 38.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.97
  }
 ],
 "id": "overlay_4266F498_5B1F_8701_41B5_586982964391",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43DD476D_5B7F_8103_41D3_A311D548C0ED, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_41C4EB29_5B08_8103_41D6_61459E2B9D43, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.51,
   "yaw": 107.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_2_1_0_map.gif",
      "width": 148,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 5.07
  }
 ],
 "id": "overlay_4CE2711F_5B79_813F_41C8_A2870A645415",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_420CAA4A_5B79_8301_41B3_7FE8FCEB8358, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4CE7D30D_5B09_8103_41D4_5B401A416F70, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.9,
   "yaw": -3.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_3_1_0_map.gif",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 12.25
  }
 ],
 "id": "overlay_4340E610_5B78_8301_41B2_CD39718EB52B",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43C1EEB7_5B78_830F_41A4_C36DF5CE2A8D, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4CE7330D_5B09_8103_41CE_2A500493BDDA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.82,
   "yaw": -37.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_4_1_0_map.gif",
      "width": 155,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 3.82
  }
 ],
 "id": "overlay_434F8175_5B78_8103_41BB_4CF1B037530B",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43C33617_5B78_830F_41C9_8B473C1F1B5A, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4CE4830D_5B09_8103_41BC_4D3FF560B5DB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.34,
   "yaw": -75.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_5_1_0_map.gif",
      "width": 154,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ]
   },
   "pitch": 2.37
  }
 ],
 "id": "overlay_4353010F_5B7B_811F_41CE_9B164FAEDEB5",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_466F8DF2_5B19_8101_41C7_D344294600B6, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.74,
   "yaw": -97.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_6_1_0_map.gif",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ]
   },
   "pitch": 0.34
  }
 ],
 "id": "overlay_4305503A_5B79_9F01_4190_5CAC0AEC6D4E",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_438D9F8F_5B77_8100_41BE_07906C4C2BF8, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4CE4730D_5B09_8103_41D3_410019F323B1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.83,
   "yaw": -102.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_7_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ]
   },
   "pitch": -0.01
  }
 ],
 "id": "overlay_437EE5E0_5B77_8100_41C5_68554B72674A",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4391A6FF_5B08_80FF_4187_6EE739909389, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4CE5D31D_5B09_8100_41C3_B127244EE334, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.94,
   "yaw": -122.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_8_1_0_map.gif",
      "width": 152,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 1.05
  }
 ],
 "id": "overlay_431C16E2_5B08_8301_41B9_00925818E190",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43838DD6_5B08_8101_41C6_A4EFA06680FF, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4CE5231D_5B09_8103_41C1_45502F31D146, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.96,
   "yaw": -136.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_9_1_0_map.gif",
      "width": 160,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0.96
  }
 ],
 "id": "overlay_431D245A_5B09_8700_41D6_C90C0F815084",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43B2629C_5B08_8330_41BE_8F037CF5AD21, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4CE2A31D_5B09_8103_41B9_09062359CDC4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.49,
   "yaw": -163.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_10_1_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 173
     }
    ]
   },
   "pitch": -0.32
  }
 ],
 "id": "overlay_435ED409_5B0B_8703_41B7_925052CB23AE",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4253B66B_5B09_8300_4193_A42F95294BBE, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4CE2331D_5B09_8103_41D6_87F2B89B28BA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.8,
   "yaw": -160.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_11_1_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": -0.67
  }
 ],
 "id": "overlay_433D11F9_5B09_8100_41A6_3E0D60D85BF6",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_42E8050B_5B08_8107_41C3_AA0B1B31E0D7, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.06,
   "yaw": 175.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_12_1_0_map.gif",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 1.35
  }
 ],
 "id": "overlay_43F813CB_5B08_8107_41CF_807CB46B0AF6",
 "data": {
  "label": "Polygon"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211, this.camera_5344AA53_6CB1_3E9A_41D8_5CE498859764); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_550A26DF_6CB1_578A_41CF_E13E3CD3283C",
   "yaw": -51.23,
   "pitch": -35.59,
   "distance": 100,
   "hfov": 33.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.22,
   "yaw": -51.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0_HS_13_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.59
  }
 ],
 "id": "overlay_429C0181_6CF1_4A76_41D8_7EC710EA0467",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869, this.camera_5354CA72_6CB1_3E9A_41D6_E15666B4DC68); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_550BF6DF_6CB1_578A_41D0_EE696F6572CE",
   "yaw": -80.9,
   "pitch": -23.33,
   "distance": 100,
   "hfov": 37.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 37.52,
   "yaw": -80.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0_HS_14_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.33
  }
 ],
 "id": "overlay_44368C6E_6CF3_5A8A_41A4_8E1612D5ED28",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34, this.camera_52FE8BA4_6CB1_3DBE_41D0_B29034CD9E7F); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4290BBB1_6C91_5D96_41B9_FB5E8F707BDD",
   "yaw": 156.96,
   "pitch": 0.01,
   "distance": 100,
   "hfov": 6.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.05,
   "yaw": 156.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.01
  }
 ],
 "id": "overlay_4C92F9B3_6C93_3D99_41D8_F693FB9F1AAF",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_71767D99_6D91_D596_41D4_402281570AAA, this.camera_52CE8BD8_6CB1_3D96_41BB_4EC481C9190A); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42903BB1_6C91_5D96_41A6_3F68B5305125",
   "yaw": 67.89,
   "pitch": 1.99,
   "distance": 100,
   "hfov": 6.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.04,
   "yaw": 67.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.99
  }
 ],
 "id": "overlay_4F79DD88_6C91_5A76_41D7_9F5AE113946E",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7, this.camera_532ABAC6_6CB1_3FFA_41C5_539E1E9B8C90); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F98F042_6CB1_CAFA_4163_9955E4C83134",
   "yaw": -107.55,
   "pitch": -3.6,
   "distance": 100,
   "hfov": 6.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.04,
   "yaw": -107.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.6
  }
 ],
 "id": "overlay_76540FD7_6C97_5599_41D5_A4C49ED55BBB",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F, this.camera_5324FAA7_6CB1_3FBA_41D8_AA752E6B4ED1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F982042_6CB1_CAFA_41BE_5B72570077FD",
   "yaw": -94.59,
   "pitch": 2.41,
   "distance": 100,
   "hfov": 5.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.77,
   "yaw": -94.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.41
  }
 ],
 "id": "overlay_483872C6_6C90_CFFB_41AD_50918042C2E6",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_76F60BEF_6C93_5D89_41D9_72E3BCFE277D, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4F2330B9_6CB1_CB96_41D8_F4C684591473, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.22,
   "yaw": -159.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0_HS_2_1_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ]
   },
   "pitch": -2.4
  }
 ],
 "id": "overlay_49A6FB9F_6C93_7D89_41D4_5E427C0E0ECE",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_76BCCAFF_6C91_7F8A_41C6_C06980C40C4B, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'paddingLeft':5,'pressedBorderSize':0,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'iconHeight':20,'paddingBottom':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','iconWidth':20,'rollOverBackgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','paddingRight':5,'rollOverIconWidth':20,'backgroundOpacity':0.3,'paddingTop':5,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_4F23D0B9_6CB1_CB96_41C1_7ABEAC5804F4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.56,
   "yaw": -24.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0_HS_3_1_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.43
  }
 ],
 "id": "overlay_49CCEEA8_6C91_F7B6_41D1_5D7039003095",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F, this.camera_503848F4_6CB1_3B9E_41B5_5975797ACD33); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F88002D_6CB1_CA89_41CF_FC457A4A3726",
   "yaw": -65.92,
   "pitch": 11.17,
   "distance": 100,
   "hfov": 4.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.5,
   "yaw": -65.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.17
  }
 ],
 "id": "overlay_744A01C9_6D71_CD89_41CF_BF1A5E570232",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925, this.camera_501E5922_6CB1_3ABB_41D7_019B01B5A1E1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4E71CC0C_6C93_DA8E_41D9_64C27CE777BB",
   "yaw": -65.94,
   "pitch": -5.86,
   "distance": 100,
   "hfov": 15.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.95,
   "yaw": -65.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0_HS_1_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.86
  }
 ],
 "id": "overlay_77C0DB78_6C8F_DE96_41C3_F2A009D0FB99",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638, this.camera_500E0903_6CB1_3A7A_41DA_3731D02FF3CF); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F89502D_6CB1_CA89_41D0_ED7BDC31BF15",
   "yaw": 68.6,
   "pitch": -1.44,
   "distance": 100,
   "hfov": 6.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.05,
   "yaw": 68.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.44
  }
 ],
 "id": "overlay_774A0F59_6C90_D696_41CC_86299B4A5E1A",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34, this.camera_5029E8DF_6CB1_3B8A_41D8_1190C3B6325C); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F96E02D_6CB1_CA89_41D1_998758140B67",
   "yaw": -125.13,
   "pitch": -4.33,
   "distance": 100,
   "hfov": 13.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.54,
   "yaw": -125.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0_HS_3_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.33
  }
 ],
 "id": "overlay_492C5937_6C93_3A9A_41D1_DF6D1781375D",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7, this.camera_52EE5B75_6CB1_3E9E_41D0_96D18DC75B2F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F99E042_6CB1_CAFA_41D6_8BA993B84401",
   "yaw": 88.66,
   "pitch": -2.07,
   "distance": 100,
   "hfov": 6.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.04,
   "yaw": 88.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.07
  }
 ],
 "id": "overlay_48B7DD3F_6C97_5A8A_41D8_6BFFA21CAF7B",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F, this.camera_533AAAF5_6CB1_3F9E_41C3_20A5F39FF22F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F997042_6CB1_CAFA_41BD_E2383D7DE0F0",
   "yaw": 45.11,
   "pitch": 9.58,
   "distance": 100,
   "hfov": 5.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.96,
   "yaw": 45.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.58
  }
 ],
 "id": "overlay_48B98592_6C91_759A_41D0_F5D296370057",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925, this.camera_53189B4C_6CB1_3E8F_41C2_CEB77A997F9B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4FE6A042_6CB1_CAFA_41D6_0C4487BA6077",
   "yaw": 68.6,
   "pitch": -2.24,
   "distance": 100,
   "hfov": 13.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.26,
   "yaw": 68.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0_HS_2_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.24
  }
 ],
 "id": "overlay_48BB5360_6C93_4EB6_41D6_CBD940FFD2E6",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC, this.camera_53086B1E_6CB1_3E8A_41D6_7E5904F1FEB2); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_42973BB1_6C91_5D96_41B8_5CA056D1F3B4",
   "yaw": -77.06,
   "pitch": -4.66,
   "distance": 100,
   "hfov": 6.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.03,
   "yaw": -77.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.66
  }
 ],
 "id": "overlay_4F36A2D6_6C91_4F9B_41D6_738723A32959",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F, this.camera_504BD8B0_6CB1_3B96_41C9_622D94E79BB5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4C9914B5_5E8F_CCB7_41CD_8362D5673C4E",
   "yaw": -54.24,
   "pitch": 19.44,
   "distance": 100,
   "hfov": 7.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.08,
   "yaw": -54.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 19.44
  }
 ],
 "id": "overlay_43AFCB22_5B18_8100_41D5_B70ACD9C4B28",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_717E8DD0_6D91_5596_41D0_2F203B050B34, this.camera_5045D8A1_6CB1_3BB6_41D2_D82C9C0A8F7B); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4F97B02D_6CB1_CA89_419C_F4AB6F513A8E",
   "yaw": -137.59,
   "pitch": -5.1,
   "distance": 100,
   "hfov": 14.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.67,
   "yaw": -137.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0_HS_1_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.1
  }
 ],
 "id": "overlay_48FFD249_6CB0_CEF6_41B9_2F9091229235",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7, this.camera_505BE8CF_6CB1_3B89_4190_74ACF9093EA3); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4E707C0C_6C93_DA8E_418F_B2E25546592D",
   "yaw": 130.92,
   "pitch": -10.22,
   "distance": 100,
   "hfov": 5.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.95,
   "yaw": 130.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.22
  }
 ],
 "id": "overlay_4F3F3131_6CB0_CA96_41D9_EF6FE1459C9B",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4E73CC0C_6C93_DA8E_41D8_634DAB2780EF",
   "yaw": 91.89,
   "pitch": -1.48,
   "distance": 100,
   "hfov": 4.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.48,
   "yaw": 91.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.48
  }
 ],
 "id": "overlay_4C69DB9C_6C8F_3D8F_41D9_CC01D82EE888",
 "data": {
  "label": "Circle Arrow 07"
 }
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "width": 110,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "height": 110,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "width": "91.304%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "gap": 3,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 0,
 "paddingLeft": 0,
 "fontFamily": "Bebas Neue Bold",
 "propagateClick": true,
 "width": 454,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "borderSize": 0,
 "text": "замок острозьких",
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "top": 5,
 "textShadowHorizontalLength": 0,
 "paddingRight": 0,
 "height": 86,
 "horizontalAlign": "left",
 "minWidth": 1,
 "fontSize": "70px",
 "fontColor": "#FFFFFF",
 "class": "Label",
 "textShadowOpacity": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "textShadowColor": "#000000",
 "shadow": false,
 "textShadowVerticalLength": 0,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "textDecoration": "none"
},
{
 "borderRadius": 0,
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 0,
 "paddingLeft": 0,
 "fontFamily": "Bebas Neue Book",
 "propagateClick": true,
 "width": 388,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "borderSize": 0,
 "text": "мiсто старокостянтинiв",
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "textShadowHorizontalLength": 0,
 "paddingRight": 0,
 "height": 46,
 "horizontalAlign": "left",
 "minWidth": 1,
 "fontSize": 41,
 "bottom": 0,
 "fontColor": "#FFFFFF",
 "class": "Label",
 "textShadowOpacity": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "textShadowColor": "#000000",
 "shadow": false,
 "textShadowVerticalLength": 0,
 "data": {
  "name": "text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "right": "0%",
 "propagateClick": true,
 "maxHeight": 2,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 2,
 "horizontalAlign": "center",
 "minWidth": 1,
 "bottom": 53,
 "class": "Image",
 "paddingTop": 0,
 "data": {
  "name": "white line"
 },
 "shadow": false,
 "scaleMode": "fit_outside",
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "paddingLeft": 30,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "width": 1199,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 51,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "class": "Container",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "gap": 3,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "10%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "top": "5%",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "10%",
 "propagateClick": false,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "5%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "10%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "top": "5%",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "scrollBarWidth": 10,
 "right": "10%",
 "propagateClick": false,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "5%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "top": "7%",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "bottom": "7%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "10%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "top": "5%",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "10%",
 "propagateClick": false,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "5%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "top": "7%",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "top": "7%",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "top": "7%",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "bottom": "7%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "right": "10%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "top": "5%",
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "10%",
 "propagateClick": false,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "5%",
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "backgroundOpacity": 0
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_5513B6F4_6CB1_579E_41D5_1012BB491697",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_5510C6F4_6CB1_579E_41C7_A5981922C381",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_550D86F4_6CB1_579E_41D0_2F31838D1C56",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_550D26F4_6CB1_579E_41A3_0D884E44D27A",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_5515D703_6CB1_567A_41BE_9D7B220C02B8",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7165CEC8_6D91_77F6_41B1_05E79690EEB0_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C87C4B5_5E8F_CCB7_41D5_A67D7F8EBC61",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8744B5_5E8F_CCB7_41B5_626CB5DAFC7A",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_1_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F94B02D_6CB1_CA89_41D4_3915CCCF2070",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F94E02D_6CB1_CA89_41D9_8D23F17524BD",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F94702D_6CB1_CA89_41C0_8021FCFC8E7E",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8314B5_5E8F_CCB7_41C0_2D8B97E0B8C3",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8294B5_5E8F_CCB7_41B8_1FFD30C6B564",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_2_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8FD4B5_5E8F_CCB7_41D0_09D6DBD28E08",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_1_HS_12_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4292DBB1_6C91_5D96_41D2_58AA46F4AF99",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_55145703_6CB1_567A_41D7_294AC17B15A2",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_717B36A2_6D91_57BA_41D2_27E4D2069CCB_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_551256F4_6CB1_579E_41D3_7E6903AD95D9",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_551236F4_6CB1_579E_41CC_8D5748F4B5F3",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4291DBB1_6C91_5D96_41A7_7DD513221E45",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_42914BB1_6C91_5D96_4198_444D32353050",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_71767D99_6D91_D596_41D4_402281570AAA_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_550F26F4_6CB1_579E_41D0_58641C67F0E0",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_550C66F4_6CB1_579E_41C5_503D9D99E386",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_550B66DF_6CB1_578A_41D3_EF80D797D11C",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_550E16F4_6CB1_579E_41D6_A61C92CC8BE1",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0_HS_11_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8734B5_5E8F_CCB7_41A2_97C42AB1C31A",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8464B5_5E8F_CCB7_41CA_384D35DB1B86",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_10_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C83E4B5_5E8F_CCB7_41C1_D79F48097449",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_1_HS_12_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_5503A6CF_6CB1_578A_41DA_720456805672",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0_HS_13_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_550FF6F4_6CB1_579E_41D6_D57837C7D3B6",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_550F46F4_6CB1_579E_41BF_1631BBC6087B",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8F74B5_5E8F_CCB7_41CC_B5720EB9FA74",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_550A26DF_6CB1_578A_41CF_E13E3CD3283C",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0_HS_13_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_550BF6DF_6CB1_578A_41D0_EE696F6572CE",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0_HS_14_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4290BBB1_6C91_5D96_41B9_FB5E8F707BDD",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_42903BB1_6C91_5D96_41A6_3F68B5305125",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_71702CAA_6D91_DB8A_41D3_031CFF5A32CC_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F98F042_6CB1_CAFA_4163_9955E4C83134",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F982042_6CB1_CAFA_41BE_5B72570077FD",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_717FCDC3_6D91_55FA_41D2_CCBDC75CB638_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F88002D_6CB1_CA89_41CF_FC457A4A3726",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4E71CC0C_6C93_DA8E_41D9_64C27CE777BB",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F89502D_6CB1_CA89_41D0_ED7BDC31BF15",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F96E02D_6CB1_CA89_41D1_998758140B67",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7171DDC7_6D90_D5FA_41CA_D5801E533CC7_0_HS_3_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F99E042_6CB1_CAFA_41D6_8BA993B84401",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F997042_6CB1_CAFA_41BD_E2383D7DE0F0",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4FE6A042_6CB1_CAFA_41D6_0C4487BA6077",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_42973BB1_6C91_5D96_41B8_5CA056D1F3B4",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_717E8DD0_6D91_5596_41D0_2F203B050B34_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C9914B5_5E8F_CCB7_41CD_8362D5673C4E",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4F97B02D_6CB1_CA89_419C_F4AB6F513A8E",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4E707C0C_6C93_DA8E_418F_B2E25546592D",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4E73CC0C_6C93_DA8E_41D8_634DAB2780EF",
 "class": "AnimatedImageResource",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 60,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 60,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter('https://castle.starkon.pp.ua/')",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 58,
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook('https://castle.starkon.pp.ua/')",
 "class": "IconButton",
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png"
},
{
 "cursor": "hand",
 "rollOverShadow": false,
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "iconWidth": 0,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 120,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "paddingRight": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "\u0413\u041e\u041b\u041e\u0412\u041d\u0410",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "textDecoration": "none"
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 130,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "paddingRight": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "\u0421\u041f\u0418\u0421\u041e\u041a \u041f\u0410\u041d\u041e\u0420\u0410\u041c",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button panorama list"
 },
 "fontWeight": "bold",
 "textDecoration": "none"
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 90,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "paddingRight": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u0418",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button location"
 },
 "fontWeight": "bold",
 "textDecoration": "none"
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 103,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "paddingRight": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "\u041f\u041b\u0410\u041d \u041f\u041e\u0412\u0415\u0420\u0425\u0423",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button floorplan"
 },
 "fontWeight": "bold",
 "textDecoration": "none"
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "width": 90,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "paddingRight": 0,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "label": "\u0420\u041e\u0417\u0420\u041e\u0411\u041d\u0418\u041a",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "class": "Button",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "data": {
  "name": "Button realtor"
 },
 "fontWeight": "bold",
 "textDecoration": "none"
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "width": "85%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 50,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "50%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "height": "100%"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "height": "75%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg"
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "width": "85%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 50,
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "50%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "height": "100%"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "minHeight": 50,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "height": "75%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 73.35,
 "class": "Container",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "itemVerticalAlign": "top",
 "borderRadius": 5,
 "itemMinWidth": 50,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "paddingBottom": 70,
 "scrollBarWidth": 10,
 "width": "100%",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelGap": 7,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 125,
 "selectedItemLabelFontColor": "#04A3E1",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#04A3E1",
 "paddingRight": 70,
 "minWidth": 1,
 "itemLabelFontStyle": "normal",
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemThumbnailWidth": 220,
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Montserrat",
 "shadow": false,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "paddingTop": 10,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemHorizontalAlign": "center",
 "backgroundOpacity": 0.05,
 "itemThumbnailShadow": false,
 "itemLabelPosition": "bottom",
 "itemPaddingLeft": 3,
 "rollOverItemLabelFontColor": "#04A3E1",
 "paddingLeft": 70,
 "height": "82.401%",
 "selectedItemThumbnailShadow": true,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "propagateClick": false,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "class": "ThumbnailGrid",
 "itemMinHeight": 50,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "data": {
  "name": "ThumbnailList"
 },
 "itemHeight": 156,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "width": "85%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 50,
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "15%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 400,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "height": "100%"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "height": "75%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 140,
 "class": "Container",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MapViewer",
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingLeft": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 140,
 "class": "Container",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "width": "55%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 60,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "45%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 60,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "height": "100%"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "width": "25%",
 "paddingBottom": 0,
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "height": "75%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "maxHeight": 1000,
 "verticalAlign": "middle",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 60,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 520,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "width": 370,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 40,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "right": 0,
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#CCCCCC"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "paddingLeft": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "bottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container arrows"
 },
 "shadow": false
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 60,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 520,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "width": 370,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 40,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 80,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "width": "77.115%",
 "borderSize": 0,
 "minHeight": 100,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.05vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0430\u043d\u043e\u0440\u0430\u043c:</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "propagateClick": false,
 "maxHeight": 60,
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "height": "36.14%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg"
},
{
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "paddingBottom": 0,
 "right": "0%",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10309.779603517936!2d27.213118992822775!3d49.758887613193195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472de0a2ebf1cc9f%3A0x1d9fb1d4c833ce40!2z0JfQsNC80L7QuiDQutC90Y_Qt9C10Lkg0J7RgdGC0YDQvtC20YHQutC40YU!5e0!3m2!1sru!2sua!4v1732478295697!5m2!1sru!2sua\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "bottom": "0%",
 "class": "WebFrame",
 "scrollEnabled": true,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "shadow": false,
 "insetBorder": false,
 "backgroundOpacity": 1
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 60,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 520,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "width": 370,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 40,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 80,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "width": "77.115%",
 "borderSize": 0,
 "minHeight": 100,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.05vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "propagateClick": false,
 "maxHeight": 60,
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "height": "36.14%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 80,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "width": "77.115%",
 "borderSize": 0,
 "minHeight": 100,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.05vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "propagateClick": false,
 "maxHeight": 60,
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "height": "36.14%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg"
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingLeft": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": "0%",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "show": "this.mainPlayList.set('selectedIndex', 17)",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingLeft": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": "0%",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "propagateClick": false,
 "maxHeight": 60,
 "width": "10%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "height": "10%",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "maxHeight": 1000,
 "verticalAlign": "bottom",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "scaleMode": "fit_outside"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 60,
 "class": "Container",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 520,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "height": "100%"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "width": 370,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 40,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 20,
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.95vh;font-family:'Bebas Neue Bold';\">I\u0441\u0442\u043e\u0440\u0438\u043a\u043e-\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u0438\u0439 \u0446\u0435\u043d\u0442\u0440-\u043c\u0443\u0437\u0435\u0439 \u00ab\u0421\u0442\u0430\u0440\u0438\u0439 \u041a\u043e\u0441\u0442\u044f\u043d\u0442\u0438\u043di\u0432\u00bb</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.7vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.7vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.7vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.7vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.6vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Bold",
 "backgroundOpacity": 0.7,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "3vh",
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "width": "46%",
 "label": "lorem ipsum",
 "class": "Button",
 "gap": 5,
 "fontStyle": "normal",
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "data": {
  "name": "Button"
 },
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "height": "9%"
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "80%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "30%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container separator"
 },
 "shadow": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 20,
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.7vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.7vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.08vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Bold",
 "backgroundOpacity": 0.7,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "3vh",
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "width": "46%",
 "label": "lorem ipsum",
 "class": "Button",
 "gap": 5,
 "fontStyle": "normal",
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "data": {
  "name": "Button"
 },
 "shadow": false,
 "fontWeight": "normal",
 "textDecoration": "none",
 "height": "9%"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 20,
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">I\u0441\u0442\u043e\u0440\u0438\u043a\u043e-\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u0438\u0439 \u0446\u0435\u043d\u0442\u0440-\u043c\u0443\u0437\u0435\u0439 </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">\u201c\u0421\u0442\u0430\u0440\u0438\u0439 \u041a\u043e\u0441\u0442\u044f\u043d\u0442\u0438\u043di\u0432\u201d</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">\u043ci\u0441\u0442\u043e \u0421\u0442\u0430\u0440\u043e\u043a\u043e\u0441\u0442\u044f\u043d\u0442\u0438\u043di\u0432, </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">\u0432\u0443\u043b. \u0417\u0430\u043c\u043a\u043e\u0432\u0430 1-\u0410</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">+38 (067) 7563330</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">\u2022 zamokostrozkyh@gmail.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.16vh;\">\u0417\u0438\u043c\u043e\u0432\u0438\u0439 \u043f\u0435\u0440i\u043e\u0434 (01 \u0436\u043e\u0432\u0442\u043d\u044f - 30 \u043a\u0432i\u0442\u043d\u044f):</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.16vh;\">\u2022 \u041f\u043e\u043d\u0435\u0434i\u043b\u043e\u043a - \u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f - 08.00 - 17.00</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.16vh;\">\u2022 \u0421\u0443\u0431\u043e\u0442\u0430 - \u043d\u0435\u0434i\u043b\u044f - 09.00 - 17.00</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.16vh;\">\u2022 \u041e\u0431i\u0434\u043d\u044f \u043f\u0435\u0440\u0435\u0440\u0432\u0430 - 12.00 - 13.00</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.16vh;\">\u041bi\u0442\u043d\u0456\u0439 \u043f\u0435\u0440i\u043e\u0434 (30 \u043a\u0432\u0456\u0442\u043d\u044f - 30 \u0432\u0435\u0440\u0435\u0441\u043d\u044f):</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.16vh;\">\u2022 \u041f\u043e\u043d\u0435\u0434i\u043b\u043e\u043a - \u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f - 08.00 - 19.00</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.16vh;\">\u2022 \u0421\u0443\u0431\u043e\u0442\u0430 - \u043d\u0435\u0434i\u043b\u044f - 09.00 - 19.00</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.16vh;\">\u2022 \u041e\u0431i\u0434\u043d\u044f \u043f\u0435\u0440\u0435\u0440\u0432\u0430 - 12.00 - 13.00</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Bebas Neue Bold",
 "backgroundOpacity": 0.7,
 "propagateClick": false,
 "width": 207,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "paddingRight": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 34,
 "label": "lorem ipsum",
 "fontColor": "#FFFFFF",
 "height": 59,
 "class": "Button",
 "gap": 5,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "normal",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "textDecoration": "none"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "45%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.95vh;font-family:'Bebas Neue Bold';\">\u0420\u043e\u0437\u0440\u043e\u0431\u043d\u0438\u043a</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "paddingLeft": 0,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "height": "80%"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "propagateClick": false,
 "maxHeight": 200,
 "verticalAlign": "top",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "width": "25%",
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": "100%",
 "class": "Image",
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 10,
 "width": "75%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">\u041e\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u041c\u0435\u043b\u0435\u0448\u043a\u043e</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">Full-stack developer</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.8vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.8vh;font-family:'Bebas Neue Bold';\">Tlf.: +38 095 466 41 90</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.8vh;font-family:'Bebas Neue Bold';\">boss@starkon.pp.ua</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.8vh;font-family:'Bebas Neue Bold';\">www.cfhope.in.ua</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "downloadEnabled": false,
 "vrPolyfillScale": 0.5,
 "height": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
