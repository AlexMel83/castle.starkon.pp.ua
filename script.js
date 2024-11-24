(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
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
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "verticalAlign": "top",
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -140.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7C1B0974_5D80_45B4_4130_EE8A3660D960",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
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
  "this.popup_466F8DF2_5B19_8101_41C7_D344294600B6"
 ],
 "label": "IMG_20241117_121720_00_048",
 "id": "panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -149.78,
   "yaw": 39.22,
   "panorama": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -149.78,
   "yaw": 38.82,
   "panorama": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": -0.67,
 "showEasing": "cubic_in",
 "id": "popup_4253B66B_5B09_8300_4193_A42F95294BBE",
 "yaw": -160.11,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 6.73,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
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
 "id": "ImageResource_4FDBF048_5B08_7F01_41C9_E783C3002232",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_122017_00_052",
 "id": "panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "yaw": -53.25,
  "class": "PanoramaCameraPosition",
  "pitch": 1.43
 },
 "id": "panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "label": "IMG20241117125941",
 "id": "album_43124356_5B79_8101_41CB_AE190C4ECF93_22",
 "class": "Photo",
 "width": 3000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_43124356_5B79_8101_41CB_AE190C4ECF93_22.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_43124356_5B79_8101_41CB_AE190C4ECF93_22_t.jpg",
 "height": 4000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "yaw": -55.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0.19
 },
 "id": "panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 23.27,
 "showEasing": "cubic_in",
 "id": "popup_4E6F2130_5B19_8100_41A1_8BBCF0A6D1D2",
 "yaw": 69,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 15.43,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
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
 "id": "ImageResource_4D75C02A_5B09_9F01_41BB_CDC65D95EB3C",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_123148_00_061",
 "id": "panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_43AFCB22_5B18_8100_41D5_B70ACD9C4B28"
 ],
 "label": "IMG_20241117_120928_00_039",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 126.52,
   "yaw": -54.24,
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_t.jpg"
},
{
 "duration": 5000,
 "label": "IMG20241117122602",
 "id": "album_50D0A6FA_5D81_CCBD_41CB_9220EBC232DF",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_50D0A6FA_5D81_CCBD_41CB_9220EBC232DF.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_50D0A6FA_5D81_CCBD_41CB_9220EBC232DF_t.jpg",
 "height": 1000
},
{
 "duration": 5000,
 "label": "IMG20241117122908",
 "id": "album_5176451B_5D80_CD73_41B7_C20CDA59FA7E",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_5176451B_5D80_CD73_41B7_C20CDA59FA7E.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_5176451B_5D80_CD73_41B7_C20CDA59FA7E_t.jpg",
 "height": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7C632945_5D80_45D7_41D2_288A7C089B99",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": -0.01,
 "showEasing": "cubic_in",
 "id": "popup_438D9F8F_5B77_8100_41BE_07906C4C2BF8",
 "yaw": -102.02,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 5.76,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "duration": 5000,
 "label": "IMG20241117124621",
 "id": "album_51E31F3A_5D80_5DBD_41D3_59F693DEEBFE",
 "class": "Photo",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_51E31F3A_5D80_5DBD_41D3_59F693DEEBFE.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_51E31F3A_5D80_5DBD_41D3_59F693DEEBFE_t.jpg",
 "height": 750
},
{
 "duration": 5000,
 "label": "IMG20241117122552",
 "id": "album_51A1C14D_5D81_C5D7_417B_7FB513DC9CE1",
 "class": "Photo",
 "width": 900,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_51A1C14D_5D81_C5D7_417B_7FB513DC9CE1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_51A1C14D_5D81_C5D7_417B_7FB513DC9CE1_t.jpg",
 "height": 1200
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
 "id": "ImageResource_4FD84048_5B08_7F01_41D2_0E1014BE8A40",
 "class": "ImageResource"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7C8B57E7_5D80_4CD3_41CF_8E133CD37176",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
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
 "id": "ImageResource_4D75B02A_5B09_9F01_418E_3491B361F44B",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 11.24,
 "showEasing": "cubic_in",
 "id": "popup_4EFC6019_5B09_9F03_41C1_162A929A957F",
 "yaw": 54.25,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 4.45,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 8.28,
 "showEasing": "cubic_in",
 "id": "popup_4E3F7175_5B08_8103_417A_06FDB4C5AA8B",
 "yaw": 172.96,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 13.03,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "yaw": 125.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7C4B78EB_5D80_44D3_41C0_5CA9E46C3776",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 3.06,
 "showEasing": "cubic_in",
 "id": "popup_4876BD63_5B18_8100_41D3_0FEF52DD7019",
 "yaw": -113.72,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 33.55,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
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
 "id": "ImageResource_4D74102A_5B09_9F01_41B7_59403A7501DF",
 "class": "ImageResource"
},
{
 "items": [
  {
   "camera": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_camera",
   "media": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_camera",
   "media": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_camera",
   "media": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_camera",
   "media": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_camera",
   "media": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_camera",
   "media": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_camera",
   "media": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_camera",
   "media": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_camera",
   "media": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_camera",
   "media": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_camera",
   "media": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_camera",
   "media": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_camera",
   "media": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_camera",
   "media": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_camera",
   "media": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_camera",
   "media": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_camera",
   "media": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.album_43124356_5B79_8101_41CB_AE190C4ECF93",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 5000,
 "label": "IMG20241117123712",
 "id": "album_50A55229_5D80_475F_41D0_565E9FE5EEB6",
 "class": "Photo",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_50A55229_5D80_475F_41D0_565E9FE5EEB6.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_50A55229_5D80_475F_41D0_565E9FE5EEB6_t.jpg",
 "height": 750
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_121848_00_049",
 "id": "panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 5.07,
 "showEasing": "cubic_in",
 "id": "popup_43DD476D_5B7F_8103_41D3_A311D548C0ED",
 "yaw": 107.91,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 18.89,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "label": "IMG20241117122857",
 "id": "album_562F3850_5D80_C3CD_41D4_497E6256FFA8",
 "class": "Photo",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_562F3850_5D80_C3CD_41D4_497E6256FFA8.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_562F3850_5D80_C3CD_41D4_497E6256FFA8_t.jpg",
 "height": 750
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 8.4,
 "showEasing": "cubic_in",
 "id": "popup_4FC5158F_5B08_811F_41CB_B538525E4A84",
 "yaw": 25.88,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 20.21,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 6.24,
 "showEasing": "cubic_in",
 "id": "popup_4D111E89_5B09_8303_41AD_472B559838D5",
 "yaw": 34.27,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 11.73,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
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
 "id": "ImageResource_4CE7330D_5B09_8103_41CE_2A500493BDDA",
 "class": "ImageResource"
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
 "id": "ImageResource_4CE5231D_5B09_8103_41C1_45502F31D146",
 "class": "ImageResource"
},
{
 "items": [
  {
   "camera": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925_camera",
   "media": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_camera",
   "media": "this.panorama_4F55B52D_45AC_4570_41C6_91A10727E71C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_camera",
   "media": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_camera",
   "media": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_camera",
   "media": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6_camera",
   "media": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211_camera",
   "media": "this.panorama_4EA9B1C6_45AC_DD30_41B4_B5B4B9714211",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_camera",
   "media": "this.panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_camera",
   "media": "this.panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_camera",
   "media": "this.panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_camera",
   "media": "this.panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_camera",
   "media": "this.panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6_camera",
   "media": "this.panorama_4EBD88D5_45AD_CCD0_41AC_E0ED67737AC6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_camera",
   "media": "this.panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_camera",
   "media": "this.panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_camera",
   "media": "this.panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_camera",
   "media": "this.panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 0)",
   "media": "this.album_43124356_5B79_8101_41CB_AE190C4ECF93",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9F0D8_45AC_5CD0_41CF_4B3EFFB8205D_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
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
 "duration": 5000,
 "label": "IMG20241117123728",
 "id": "album_51EB5093_5D80_434C_41C9_EED8D72293E9",
 "class": "Photo",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_51EB5093_5D80_434C_41C9_EED8D72293E9.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_51EB5093_5D80_434C_41C9_EED8D72293E9_t.jpg",
 "height": 750
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
 "id": "ImageResource_4CE7D30D_5B09_8103_41D4_5B401A416F70",
 "class": "ImageResource"
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
 "id": "ImageResource_4CE4830D_5B09_8103_41BC_4D3FF560B5DB",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "label": "IMG20241117122700",
 "id": "album_514D62E1_5D80_44CF_41C4_90CB1C672CE3",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_514D62E1_5D80_44CF_41C4_90CB1C672CE3.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_514D62E1_5D80_44CF_41C4_90CB1C672CE3_t.jpg",
 "height": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -139.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7CAF0869_5D80_43DC_41CE_190748CBDC36",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -66.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7C50D897_5D80_4373_41AA_469D3E6ED031",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
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
 "id": "ImageResource_4FD4F048_5B08_7F01_41D0_FDFBCFA23F9B",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "label": "IMG20241117122718",
 "id": "album_511B65DC_5D80_4CF5_41D3_468C8393CBB8",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_511B65DC_5D80_4CF5_41D3_468C8393CBB8.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_511B65DC_5D80_4CF5_41D3_468C8393CBB8_t.jpg",
 "height": 1000
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "gyroscopeEnabled": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 1.05,
 "showEasing": "cubic_in",
 "id": "popup_4391A6FF_5B08_80FF_4187_6EE739909389",
 "yaw": -122.37,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 10.22,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_123407_00_065",
 "id": "panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_50706E68_45EC_47F0_41C9_727962B43B96",
  "this.overlay_50FE1B7E_45D4_4DD0_41CF_0AEB7067F018",
  "this.overlay_5F8463C3_45D4_5D30_41C8_8DC95176DB79"
 ],
 "label": "IMG_20241117_121142_00_040",
 "hfov": 360,
 "class": "Panorama",
 "id": "panorama_4F55B52D_45AC_4570_41C6_91A10727E71C",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 3.29,
 "showEasing": "cubic_in",
 "id": "popup_4E1FCB0A_5B09_8101_41C0_2CAF7487B382",
 "yaw": -175.91,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 10.88,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
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
 "label": "IMG_20241117_121513_00_045",
 "id": "panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -142.32,
   "yaw": 40.63,
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F"
  },
  {
   "backwardYaw": 39.22,
   "yaw": -149.78,
   "panorama": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 39.22,
   "yaw": -149.35,
   "panorama": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 0.96,
 "showEasing": "cubic_in",
 "id": "popup_43838DD6_5B08_8101_41C6_A4EFA06680FF",
 "yaw": -136.16,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 10.63,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "duration": 5000,
 "label": "IMG20241117122705",
 "id": "album_50013AA1_5D80_474F_41C9_C1CFC2898A3D",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_50013AA1_5D80_474F_41C9_C1CFC2898A3D.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_50013AA1_5D80_474F_41C9_C1CFC2898A3D_t.jpg",
 "height": 1000
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
 "id": "ImageResource_4D75002A_5B09_9F01_41D6_A82E31811683",
 "class": "ImageResource"
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
 "id": "ImageResource_4CE2331D_5B09_8103_41D6_87F2B89B28BA",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 2.37,
 "showEasing": "cubic_in",
 "id": "popup_43C33617_5B78_830F_41C9_8B473C1F1B5A",
 "yaw": -75.36,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 8.64,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 10.78,
 "showEasing": "cubic_in",
 "id": "popup_45AC9C90_5B08_8701_41B4_ED2856FD69B1",
 "yaw": -143.46,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 7.02,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "duration": 5000,
 "label": "IMG20241117122639",
 "id": "album_53BA4A48_5D81_C7DD_419A_97E8AEBD2925",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53BA4A48_5D81_C7DD_419A_97E8AEBD2925.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_53BA4A48_5D81_C7DD_419A_97E8AEBD2925_t.jpg",
 "height": 1000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_123054_00_060",
 "id": "panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EA99590_45AD_C550_41CD_D71C2EBACCAD_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 13.96,
 "showEasing": "cubic_in",
 "id": "popup_45BA98E9_5B09_8F03_41C1_4658B444A2E7",
 "yaw": -7.04,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 14.1,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "duration": 5000,
 "label": "IMG20241117122848",
 "id": "album_569E8B41_5D80_C5CC_41B3_771DF09DE4F5",
 "class": "Photo",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_569E8B41_5D80_C5CC_41B3_771DF09DE4F5.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_569E8B41_5D80_C5CC_41B3_771DF09DE4F5_t.jpg",
 "height": 750
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
 "id": "ImageResource_4D74302A_5B09_9F01_4197_E011B0FC9250",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 1.35,
 "showEasing": "cubic_in",
 "id": "popup_42E8050B_5B08_8107_41C3_AA0B1B31E0D7",
 "yaw": 175.14,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 14.41,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "duration": 5000,
 "label": "IMG20241117122831",
 "id": "album_50CF2F00_5D80_BD4D_41D0_BC98E22A8B82",
 "class": "Photo",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_50CF2F00_5D80_BD4D_41D0_BC98E22A8B82.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_50CF2F00_5D80_BD4D_41D0_BC98E22A8B82_t.jpg",
 "height": 750
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
 "id": "ImageResource_4FDE8048_5B08_7F01_41B7_EDD0C505D6C6",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
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
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 6.92,
 "showEasing": "cubic_in",
 "id": "popup_4E7BB5BF_5B08_817F_41AC_CF59CB6FD608",
 "yaw": 121.66,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 16.9,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 9.87,
 "showEasing": "cubic_in",
 "id": "popup_4FE465EC_5B0B_8101_41C6_4A65050C37B4",
 "yaw": 94.88,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 19.23,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7C7C3921_5D80_454F_41D6_73E5268A0F0A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 141.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7CB90835_5D80_43B7_41C5_93DF5545ABCD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 8.67,
 "showEasing": "cubic_in",
 "id": "popup_4D86E47C_5B08_8701_41D1_D2E6AA7FFB82",
 "yaw": 20.35,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 2.77,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 5.34,
 "showEasing": "cubic_in",
 "id": "popup_4E58E27C_5B09_8301_41C0_F8CCA4564AAC",
 "yaw": -52.66,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 110.74,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "duration": 5000,
 "label": "IMG20241117122821",
 "id": "album_518FA422_5D80_434D_41CE_BCC55E5255C2",
 "class": "Photo",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_518FA422_5D80_434D_41CE_BCC55E5255C2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_518FA422_5D80_434D_41CE_BCC55E5255C2_t.jpg",
 "height": 750
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "label": "IMG_20241117_123329_00_064",
 "id": "panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_t.jpg"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 31.72,
 "showEasing": "cubic_in",
 "id": "popup_45CECAA7_5B18_830F_41CF_E49703FE993F",
 "yaw": -150.95,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 13.68,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -140.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7C0C3993_5D80_4573_41D1_79FC743F1073",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA7E109_45AC_3D30_41CB_3BA5E9731869_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "label": "IMG20241117122652",
 "id": "album_563E0A17_5D81_C773_41D1_041A7F2B7A33",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_563E0A17_5D81_C773_41D1_041A7F2B7A33.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_563E0A17_5D81_C773_41D1_041A7F2B7A33_t.jpg",
 "height": 1000
},
{
 "duration": 5000,
 "label": "IMG20241117122646",
 "id": "album_51D30286_5D81_C754_41AE_B5998DEBD731",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_51D30286_5D81_C754_41AE_B5998DEBD731.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_51D30286_5D81_C754_41AE_B5998DEBD731_t.jpg",
 "height": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA600B7_45AC_7B50_41CD_999F4EE8D94F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "label": "IMG20241117122729",
 "id": "album_50F06F62_5D80_7DCD_41D6_956C0AD0F89D",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_50F06F62_5D80_7DCD_41D6_956C0AD0F89D.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_50F06F62_5D80_7DCD_41D6_956C0AD0F89D_t.jpg",
 "height": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA2291E_45AD_CD50_41C1_5C655A48CAE6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
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
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_540C791C_5AF8_8101_41D1_0F14D61D9A55",
  "this.overlay_4A84305A_5AF9_BF01_4193_96EED714532B",
  "this.overlay_4BF19D28_5B0B_8101_41D4_8D1B620FECC0"
 ],
 "label": "IMG_20241117_121223_00_041",
 "id": "panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 113.41,
   "yaw": -38.8,
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 113.41,
   "yaw": -39.44,
   "panorama": "this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -54.24,
   "yaw": 126.52,
   "panorama": "this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F_t.jpg"
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
 "id": "ImageResource_4CE2A31D_5B09_8103_41B9_09062359CDC4",
 "class": "ImageResource"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 3.82,
 "showEasing": "cubic_in",
 "id": "popup_43C1EEB7_5B78_830F_41A4_C36DF5CE2A8D",
 "yaw": -37.2,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 9.06,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA9E8B3_45AD_CB50_41C0_1FA9C8C7B549_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 13.73,
 "showEasing": "cubic_in",
 "id": "popup_4817A72D_5B19_8100_41C7_E3C55FA93148",
 "yaw": 50.39,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 4.85,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "duration": 5000,
 "label": "IMG20241117122625",
 "id": "album_56AB03EB_5D81_C4D3_41AD_A0AEFF45DF72",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_56AB03EB_5D81_C4D3_41AD_A0AEFF45DF72.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_56AB03EB_5D81_C4D3_41AD_A0AEFF45DF72_t.jpg",
 "height": 1000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
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
  "this.popup_45AC9C90_5B08_8701_41B4_ED2856FD69B1"
 ],
 "label": "IMG_20241117_121407_00_044",
 "id": "panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8",
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -38.8,
   "yaw": 113.41,
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -38.8,
   "yaw": 113.5,
   "panorama": "this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": 40.63,
   "yaw": -142.32,
   "panorama": "this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "thumbnailUrl": "media/panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -66.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7C4468B7_5D80_44B3_41B5_909E203571ED",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 141.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7CB3D816_5D80_4374_41D3_F942876FA7AC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
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
 "id": "ImageResource_4FDA0048_5B08_7F01_41D6_27918FA44745",
 "class": "ImageResource"
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
 "id": "ImageResource_4D75F02A_5B09_9F01_4188_43C9A53645DF",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 0.34,
 "showEasing": "cubic_in",
 "id": "popup_466F8DF2_5B19_8101_41C7_D344294600B6",
 "yaw": -97.38,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 6.47,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 8.84,
 "showEasing": "cubic_in",
 "id": "popup_4E74C89D_5B0F_8F03_41BC_69395B5AD558",
 "yaw": 48.14,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 2.38,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EA9F154_45AC_5DD0_41C0_50B05BF51D5A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ]
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
 "id": "ImageResource_4CE5D31D_5B09_8100_41C3_B127244EE334",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "label": "IMG20241117122801",
 "id": "album_560A08E7_5D80_44D3_41AA_DD94AB8B0729",
 "class": "Photo",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_560A08E7_5D80_44D3_41AA_DD94AB8B0729.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_560A08E7_5D80_44D3_41AA_DD94AB8B0729_t.jpg",
 "height": 750
},
{
 "duration": 5000,
 "label": "IMG20241117122839",
 "id": "album_53AF3BE1_5D80_C4CC_41D1_FA273835CA7E",
 "class": "Photo",
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_53AF3BE1_5D80_C4CC_41D1_FA273835CA7E.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_53AF3BE1_5D80_C4CC_41D1_FA273835CA7E_t.jpg",
 "height": 750
},
{
 "duration": 5000,
 "label": "IMG20241117123652",
 "id": "album_560CA2C1_5D80_44CC_4156_46AB2A8F847D",
 "class": "Photo",
 "width": 917,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_560CA2C1_5D80_44CC_4156_46AB2A8F847D.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_560CA2C1_5D80_44CC_4156_46AB2A8F847D_t.jpg",
 "height": 589
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EBFFA43_45AC_4F30_41BC_E1B1CD7F17DA_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
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
 "id": "ImageResource_4CE4730D_5B09_8103_41D3_410019F323B1",
 "class": "ImageResource"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/f/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/u/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/r/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/b/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/d/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/0/{row}_{column}.jpg",
      "height": 4096,
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/1/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/2/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_4EA369F7_45AC_4CD0_41BC_03D50F6996D9_0/l/3/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame"
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
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 37.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7C142964_5D80_45D5_41C8_EDB0466C31F8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "duration": 5000,
 "label": "IMG20241117122612",
 "id": "album_56311D82_5D81_FD4D_41D6_83A5ED1CDEDC",
 "class": "Photo",
 "width": 750,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_56311D82_5D81_FD4D_41D6_83A5ED1CDEDC.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_56311D82_5D81_FD4D_41D6_83A5ED1CDEDC_t.jpg",
 "height": 1000
},
{
 "id": "album_43124356_5B79_8101_41CB_AE190C4ECF93",
 "class": "PhotoAlbum",
 "playList": "this.album_43124356_5B79_8101_41CB_AE190C4ECF93_AlbumPlayList",
 "label": "Photo Album IMG20241117122552",
 "thumbnailUrl": "media/album_43124356_5B79_8101_41CB_AE190C4ECF93_t.png"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": 12.25,
 "showEasing": "cubic_in",
 "id": "popup_420CAA4A_5B79_8301_41B3_7FE8FCEB8358",
 "yaw": -3.88,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 17.83,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "pitch": -0.32,
 "showEasing": "cubic_in",
 "id": "popup_43B2629C_5B08_8330_41BE_8F037CF5AD21",
 "yaw": -163.41,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
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
 "hfov": 7.53,
 "hideDuration": 500,
 "showDuration": 500,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay"
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
 "id": "ImageResource_4FD5B048_5B08_7F01_41C7_8DEE0D387CF1",
 "class": "ImageResource"
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
 "id": "ImageResource_4D75602A_5B09_9F01_41CC_7D18F889BAC5",
 "class": "ImageResource"
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
 "id": "ImageResource_41C4EB29_5B08_8103_41D6_61459E2B9D43",
 "class": "ImageResource"
},
{
 "duration": 5000,
 "label": "IMG20241117125958",
 "id": "album_43124356_5B79_8101_41CB_AE190C4ECF93_23",
 "class": "Photo",
 "width": 2240,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_43124356_5B79_8101_41CB_AE190C4ECF93_23.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "thumbnailUrl": "media/album_43124356_5B79_8101_41CB_AE190C4ECF93_23_t.jpg",
 "height": 3488
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 50,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "right": "0%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 641,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 573,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": 15,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 133,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "--STICKER"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 0.64,
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "right": "0%",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "bottom": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 118,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "--MENU"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Bebas Neue Book",
 "data": {
  "name": "\u043c.\u0421\u0442\u0430\u0440\u043e\u043a\u043e\u0441\u0442\u044f\u043d\u0442\u0438\u043d\u0456\u0432, \u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u044c\u043a\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 },
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 31.75,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 612.35,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "text": "мiсто  старокостянтинiв, Хмельницька обл.",
 "textShadowBlurRadius": 10,
 "propagateClick": true,
 "top": 94.25,
 "verticalAlign": "top",
 "textShadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "fontSize": 41,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "textShadowVerticalLength": 0,
 "fontStyle": "normal",
 "height": 46,
 "textShadowOpacity": 1,
 "shadow": false,
 "paddingTop": 0,
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "fontWeight": "normal"
},
{
 "fontFamily": "Bebas Neue Bold",
 "data": {
  "name": "\u0417\u0430\u043c\u043e\u043a \u043a\u043d\u044f\u0437\u0456\u0432 \u041e\u0441\u0442\u0440\u043e\u0437\u044c\u043a\u0438\u0445"
 },
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 28.25,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 641.35,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "text": "замок острожських",
 "textShadowBlurRadius": 10,
 "propagateClick": true,
 "top": 8.3,
 "verticalAlign": "top",
 "textShadowHorizontalLength": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "fontSize": 90,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "textShadowVerticalLength": 0,
 "fontStyle": "normal",
 "height": 90,
 "textShadowOpacity": 1,
 "shadow": false,
 "paddingTop": 0,
 "textShadowColor": "#000000",
 "textDecoration": "none",
 "fontWeight": "bold"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "minWidth": 0,
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "UIComponent17428"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "borderSize": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "ZoomImage17429"
 },
 "scaleMode": "custom"
},
{
 "fontFamily": "Arial",
 "data": {
  "name": "CloseButton17430"
 },
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "paddingLeft": 5,
 "iconWidth": 20,
 "paddingRight": 5,
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "paddingBottom": 5,
 "minHeight": 0,
 "borderSize": 0,
 "iconColor": "#000000",
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 350,
  "class": "FadeInEffect"
 },
 "horizontalAlign": "center",
 "minWidth": 0,
 "pressedIconColor": "#888888",
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "class": "CloseButton",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingTop": 5,
 "layout": "horizontal",
 "visible": false,
 "iconLineWidth": 5,
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78, this.camera_7C7C3921_5D80_454F_41D6_73E5268A0F0A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 39.22,
   "hfov": 26.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.87
  }
 ],
 "id": "overlay_4EDE6507_5B18_8100_4191_D6462D27C49F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78, this.camera_7C632945_5D80_45D7_41D2_288A7C089B99); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 38.82,
   "image": "this.AnimatedImageResource_4C8F74B5_5E8F_CCB7_41CC_B5720EB9FA74",
   "pitch": -32.97,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 38.82,
   "hfov": 19.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.97
  }
 ],
 "id": "overlay_4266F498_5B1F_8701_41B5_586982964391",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43DD476D_5B7F_8103_41D3_A311D548C0ED, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_41C4EB29_5B08_8103_41D6_61459E2B9D43, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 107.91,
   "hfov": 19.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.07
  }
 ],
 "id": "overlay_4CE2711F_5B79_813F_41C8_A2870A645415",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_420CAA4A_5B79_8301_41B3_7FE8FCEB8358, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4CE7D30D_5B09_8103_41D4_5B401A416F70, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -3.88,
   "hfov": 13.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.25
  }
 ],
 "id": "overlay_4340E610_5B78_8301_41B2_CD39718EB52B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43C1EEB7_5B78_830F_41A4_C36DF5CE2A8D, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4CE7330D_5B09_8103_41CE_2A500493BDDA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -37.2,
   "hfov": 9.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.82
  }
 ],
 "id": "overlay_434F8175_5B78_8103_41BB_4CF1B037530B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43C33617_5B78_830F_41C9_8B473C1F1B5A, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4CE4830D_5B09_8103_41BC_4D3FF560B5DB, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -75.36,
   "hfov": 9.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.37
  }
 ],
 "id": "overlay_4353010F_5B7B_811F_41CE_9B164FAEDEB5",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_466F8DF2_5B19_8101_41C7_D344294600B6, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -97.38,
   "hfov": 5.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.34
  }
 ],
 "id": "overlay_4305503A_5B79_9F01_4190_5CAC0AEC6D4E",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_438D9F8F_5B77_8100_41BE_07906C4C2BF8, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4CE4730D_5B09_8103_41D3_410019F323B1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -102.02,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.01
  }
 ],
 "id": "overlay_437EE5E0_5B77_8100_41C5_68554B72674A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4391A6FF_5B08_80FF_4187_6EE739909389, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4CE5D31D_5B09_8100_41C3_B127244EE334, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -122.37,
   "hfov": 10.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.05
  }
 ],
 "id": "overlay_431C16E2_5B08_8301_41B9_00925818E190",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43838DD6_5B08_8101_41C6_A4EFA06680FF, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4CE5231D_5B09_8103_41C1_45502F31D146, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -136.16,
   "hfov": 11.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.96
  }
 ],
 "id": "overlay_431D245A_5B09_8700_41D6_C90C0F815084",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_43B2629C_5B08_8330_41BE_8F037CF5AD21, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4CE2A31D_5B09_8103_41B9_09062359CDC4, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -163.41,
   "hfov": 3.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.32
  }
 ],
 "id": "overlay_435ED409_5B0B_8703_41B7_925052CB23AE",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4253B66B_5B09_8300_4193_A42F95294BBE, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4CE2331D_5B09_8103_41D6_87F2B89B28BA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -160.11,
   "hfov": 2.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.67
  }
 ],
 "id": "overlay_433D11F9_5B09_8100_41A6_3E0D60D85BF6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_42E8050B_5B08_8107_41C3_AA0B1B31E0D7, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 175.14,
   "hfov": 10.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.35
  }
 ],
 "id": "overlay_43F813CB_5B08_8107_41CF_807CB46B0AF6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F, this.camera_7C8B57E7_5D80_4CD3_41CF_8E133CD37176); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 7.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -54.24,
   "image": "this.AnimatedImageResource_4C9914B5_5E8F_CCB7_41CD_8362D5673C4E",
   "pitch": 19.44,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -54.24,
   "hfov": 7.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 19.44
  }
 ],
 "id": "overlay_43AFCB22_5B18_8100_41D5_B70ACD9C4B28",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "visible": false,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 37,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "backgroundOpacity": 0,
 "width": 100,
 "paddingRight": 0,
 "right": 30,
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": 8,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "height": 75,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "cursor": "hand",
 "maxWidth": 49,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "\u0423\u0432\u0456\u0439\u0442\u0438"
  }
 ],
 "items": [
  {
   "yaw": -38.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_1_HS_0_0.png",
      "width": 862,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": -9.62,
   "roll": 0,
   "hfov": 30.45
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_1_HS_0_1_0_map.gif",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -38.59,
   "hfov": 30.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.62
  }
 ],
 "id": "overlay_50706E68_45EC_47F0_41C9_727962B43B96",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 31.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 124.68,
   "image": "this.AnimatedImageResource_4C98A4B5_5E8F_CCB7_4196_BB066B987360",
   "pitch": -23.49,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_1_HS_1_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 124.68,
   "hfov": 31.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.49
  }
 ],
 "id": "overlay_50FE1B7E_45D4_4DD0_41CF_0AEB7067F018",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "\u0423\u0432\u0456\u0439\u0442\u0438"
  }
 ],
 "items": [
  {
   "hfov": 16.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -37.64,
   "image": "this.AnimatedImageResource_4C9864B5_5E8F_CCB7_41B2_B721364C690D",
   "pitch": -44.4,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -37.64,
   "hfov": 16.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.4
  }
 ],
 "id": "overlay_5F8463C3_45D4_5D30_41C8_8DC95176DB79",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8, this.camera_7C142964_5D80_45D5_41C8_EDB0466C31F8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 37.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 40.63,
   "image": "this.AnimatedImageResource_4C8314B5_5E8F_CCB7_41C0_2D8B97E0B8C3",
   "pitch": -24.24,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 40.63,
   "hfov": 37.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.24
  }
 ],
 "id": "overlay_4F2336D4_5B38_8301_41D2_80B4AA66EBE9",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 74.45,
   "hfov": 9.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.02
  }
 ],
 "id": "overlay_4E9DF921_5B38_8103_41CB_8DA6F38B8708",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 16.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 69.79,
   "image": "this.AnimatedImageResource_4C8294B5_5E8F_CCB7_41B8_1FFD30C6B564",
   "pitch": -19.35,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 69.79,
   "hfov": 16.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.35
  }
 ],
 "id": "overlay_4EF9AC8F_5B39_871F_41B0_97F75C8EEEFE",
 "data": {
  "label": "Arrow 06a Right"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E7BB5BF_5B08_817F_41AC_CF59CB6FD608, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4D74302A_5B09_9F01_4197_E011B0FC9250, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 121.66,
   "hfov": 19.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.92
  }
 ],
 "id": "overlay_4EDC3BE5_5B09_8103_41BD_5607B329450C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4FE465EC_5B0B_8101_41C6_4A65050C37B4, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4D75B02A_5B09_9F01_418E_3491B361F44B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 94.88,
   "hfov": 19.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 9.87
  }
 ],
 "id": "overlay_4E70A6DF_5B0B_8300_41BC_DE31ED7C4F74",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4EFC6019_5B09_9F03_41C1_162A929A957F, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4D75C02A_5B09_9F01_41BB_CDC65D95EB3C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 54.25,
   "hfov": 5.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.24
  }
 ],
 "id": "overlay_4D672ED1_5B08_8303_41A4_A9B24FEE0479",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E74C89D_5B0F_8F03_41BC_69395B5AD558, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4D75602A_5B09_9F01_41CC_7D18F889BAC5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 48.14,
   "hfov": 2.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.84
  }
 ],
 "id": "overlay_4D7F147E_5B0F_8701_41D2_D002A22B995C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4D111E89_5B09_8303_41AD_472B559838D5, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4D74102A_5B09_9F01_41B7_59403A7501DF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 34.27,
   "hfov": 12.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.24
  }
 ],
 "id": "overlay_4E46B68B_5B08_8307_41C2_189A6E91A2E9",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4D86E47C_5B08_8701_41D1_D2E6AA7FFB82, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4D75F02A_5B09_9F01_4188_43C9A53645DF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 20.35,
   "hfov": 3.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.67
  }
 ],
 "id": "overlay_4EE1A472_5B08_8701_41CB_6892F42A672A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E58E27C_5B09_8301_41C0_F8CCA4564AAC, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4D75002A_5B09_9F01_41D6_A82E31811683, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -52.66,
   "hfov": 113.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.34
  }
 ],
 "id": "overlay_4F522767_5B09_810F_41D3_61EDCFB43E37",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45CECAA7_5B18_830F_41CF_E49703FE993F, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -150.95,
   "hfov": 22.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 31.72
  }
 ],
 "id": "overlay_4EC8F9E3_5B08_8107_41CA_FA094D5DBDFE",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6, this.camera_7C1B0974_5D80_45B4_4130_EE8A3660D960); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -149.78,
   "hfov": 35.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.06
  }
 ],
 "id": "overlay_4EA4703D_5B18_9F03_41D5_1E4E9615E8B3",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA7C265_45AC_FFF0_41D0_182487412BA6, this.camera_7C0C3993_5D80_4573_41D1_79FC743F1073); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 24.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -149.35,
   "image": "this.AnimatedImageResource_4C8FD4B5_5E8F_CCB7_41D0_09D6DBD28E08",
   "pitch": -44.23,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -149.35,
   "hfov": 24.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.23
  }
 ],
 "id": "overlay_4EA2E96F_5B18_8100_41CF_6115D323D6FE",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8, this.camera_7C50D897_5D80_4373_41AA_469D3E6ED031); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 17.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -38.8,
   "image": "this.AnimatedImageResource_4C87C4B5_5E8F_CCB7_41D5_A67D7F8EBC61",
   "pitch": -39.09,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -38.8,
   "hfov": 17.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.09
  }
 ],
 "id": "overlay_540C791C_5AF8_8101_41D1_0F14D61D9A55",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBFE47D_45AC_3BD0_41BD_6DADA93B6DB8, this.camera_7C4468B7_5D80_44B3_41B5_909E203571ED); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -39.44,
   "hfov": 26.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.2
  }
 ],
 "id": "overlay_4A84305A_5AF9_BF01_4193_96EED714532B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_43AFBB22_5B18_8100_41D1_408BEDAEF925, this.camera_7C4B78EB_5D80_44D3_41C0_5CA9E46C3776); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 20.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 126.52,
   "image": "this.AnimatedImageResource_4C8744B5_5E8F_CCB7_41B5_626CB5DAFC7A",
   "pitch": -22.48,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 126.52,
   "hfov": 20.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.48
  }
 ],
 "id": "overlay_4BF19D28_5B0B_8101_41D4_8D1B620FECC0",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F, this.camera_7CB3D816_5D80_4374_41D3_F942876FA7AC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "\u0412\u0438\u0439\u0442\u0438"
  }
 ],
 "items": [
  {
   "hfov": 15.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 113.41,
   "image": "this.AnimatedImageResource_4C8734B5_5E8F_CCB7_41A2_97C42AB1C31A",
   "pitch": -34.86,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 113.41,
   "hfov": 15.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.86
  }
 ],
 "id": "overlay_50EB3E6F_45DC_C7F0_41B9_BE0C4DFD9C4B",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EBD352B_45AC_4570_41A2_9FD293F6567F, this.camera_7CB90835_5D80_43B7_41C5_93DF5545ABCD); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "\u0412\u0438\u0439\u0442\u0438"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 113.5,
   "hfov": 22.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.69
  }
 ],
 "id": "overlay_5D0D24A5_45B4_7B70_41C4_CE4167EF1FD7",
 "data": {
  "label": "\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45BA98E9_5B09_8F03_41C1_4658B444A2E7, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -7.04,
   "hfov": 14.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.96
  }
 ],
 "id": "overlay_48D8F3C8_5B08_8101_41C7_DE99A4BA54C3",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4FC5158F_5B08_811F_41CB_B538525E4A84, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4FD5B048_5B08_7F01_41C7_8DEE0D387CF1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 25.88,
   "hfov": 21.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.4
  }
 ],
 "id": "overlay_4F5D3DFB_5B08_8107_41D6_72A0792FE4A9",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E6F2130_5B19_8100_41A1_8BBCF0A6D1D2, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4FD4F048_5B08_7F01_41D0_FDFBCFA23F9B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 69,
   "hfov": 17.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 23.27
  }
 ],
 "id": "overlay_4F8FD9B9_5B18_8100_41D2_071745088004",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4817A72D_5B19_8100_41C7_E3C55FA93148, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4FDBF048_5B08_7F01_41C9_E783C3002232, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 50.39,
   "hfov": 5.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.73
  }
 ],
 "id": "overlay_48062DDC_5B1F_8101_41D3_648F199A2C8C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4876BD63_5B18_8100_41D3_0FEF52DD7019, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4FDA0048_5B08_7F01_41D6_27918FA44745, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -113.72,
   "hfov": 34.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.06
  }
 ],
 "id": "overlay_4D1BC8C1_5B1B_8F03_41A1_B93DE3170265",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_45AC9C90_5B08_8701_41B4_ED2856FD69B1, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -143.46,
   "hfov": 8.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.78
  }
 ],
 "id": "overlay_4F628B90_5B18_8101_41CE_6C2B50BF3BC1",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E1FCB0A_5B09_8101_41C0_2CAF7487B382, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4FD84048_5B08_7F01_41D2_0E1014BE8A40, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -175.91,
   "hfov": 5.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.29
  }
 ],
 "id": "overlay_4F95938F_5B08_8100_41BE_EF92EBBD2735",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_4E3F7175_5B08_8103_417A_06FDB4C5AA8B, {'pressedIconColor':'#888888','paddingTop':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'paddingLeft':5,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconColor':'#000000','iconHeight':20,'iconWidth':20,'paddingRight':5,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'borderSize':0,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, this.ImageResource_4FDE8048_5B08_7F01_41B7_EDD0C505D6C6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": 172.96,
   "hfov": 13.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.28
  }
 ],
 "id": "overlay_4F54EE5C_5B0B_8300_41C6_F734944C39F5",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4EA99380_45AC_DD30_419E_CC9CD10F3C78, this.camera_7CAF0869_5D80_43DC_41CE_190748CBDC36); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 34.26,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -142.32,
   "image": "this.AnimatedImageResource_4C8464B5_5E8F_CCB7_41CA_384D35DB1B86",
   "pitch": -33.03,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -142.32,
   "hfov": 34.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.03
  }
 ],
 "id": "overlay_4F22CCA2_5B38_8700_41D3_BC513BB92FF4",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -143.29,
   "hfov": 13.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.76
  }
 ],
 "id": "overlay_4D22B32F_5B0F_811F_41B6_D8919CA86473",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 11.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -142.57,
   "image": "this.AnimatedImageResource_4C83E4B5_5E8F_CCB7_41C1_D79F48097449",
   "pitch": -18.81,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
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
   "yaw": -142.57,
   "hfov": 11.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.81
  }
 ],
 "id": "overlay_4C89FF00_5B09_8101_41B8_CB1D9623678A",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "maxHeight": 150,
 "height": "8%",
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "12%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "minHeight": 70,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 70,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "cursor": "hand",
 "maxWidth": 150
},
{
 "maxHeight": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 150,
 "height": "8%",
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "12%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "minHeight": 70,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 70,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "transparencyActive": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "cursor": "hand",
 "maxWidth": 150
},
{
 "maxHeight": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "width": "14.22%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "width": "14.22%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "top": "20%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "items": [
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.61",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.32"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.68",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.45"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.50",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.57"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.27"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.74",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.64"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.67",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.33"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.59",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.28"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.59",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.34"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.60",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.33"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.28",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.57",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.35"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.62"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.31"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.67",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.68"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.69",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.36"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.63",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.34"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.51",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.28"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.73",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.54"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.65",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.34"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.55",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.39"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.58",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.53"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.49",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.26"
    },
    "class": "MovementPhotoCamera",
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
    "duration": 5000,
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.60",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.57"
    },
    "class": "MovementPhotoCamera",
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
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "right": "0%",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 110,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "button menu sup"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "91.304%",
 "borderRadius": 0,
 "right": "0%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "bottom": "0%",
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 3,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "height": "85.959%"
},
{
 "maxHeight": 2,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": 53,
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": 2,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "white line"
 },
 "maxWidth": 3000
},
{
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 30,
 "paddingRight": 0,
 "width": 1199,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": "0%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 3,
 "scrollBarMargin": 2,
 "height": 51,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "-button set container"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "10%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 }
},
{
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "10%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 }
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 20,
 "right": "10%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 }
},
{
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "verticalAlign": "top",
 "bottom": "7%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "5%",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "shadowHorizontalLength": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 20,
 "borderRadius": 0,
 "right": "10%",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "5%",
 "verticalAlign": "top",
 "bottom": "80%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "Container X global"
 }
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8F74B5_5E8F_CCB7_41CC_B5720EB9FA74",
 "rowCount": 6,
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
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C9914B5_5E8F_CCB7_41CD_8362D5673C4E",
 "rowCount": 6,
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
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C98A4B5_5E8F_CCB7_4196_BB066B987360",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C9864B5_5E8F_CCB7_41B2_B721364C690D",
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F55B52D_45AC_4570_41C6_91A10727E71C_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8314B5_5E8F_CCB7_41C0_2D8B97E0B8C3",
 "rowCount": 6,
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
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8294B5_5E8F_CCB7_41B8_1FFD30C6B564",
 "rowCount": 6,
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
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8FD4B5_5E8F_CCB7_41D0_09D6DBD28E08",
 "rowCount": 6,
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
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C87C4B5_5E8F_CCB7_41D5_A67D7F8EBC61",
 "rowCount": 6,
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
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8744B5_5E8F_CCB7_41B5_626CB5DAFC7A",
 "rowCount": 6,
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
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8734B5_5E8F_CCB7_41A2_97C42AB1C31A",
 "rowCount": 6,
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
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C8464B5_5E8F_CCB7_41CA_384D35DB1B86",
 "rowCount": 6,
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
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_4C83E4B5_5E8F_CCB7_41C1_D79F48097449",
 "rowCount": 6,
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
 "class": "AnimatedImageResource"
},
{
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 60,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "height": 60,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 }
},
{
 "maxHeight": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter('https://castle.starkon.pp.ua/')",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "maxHeight": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "borderSize": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook('https://castle.starkon.pp.ua/')",
 "class": "IconButton",
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "iconWidth": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 120,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 0,
 "minHeight": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "fontSize": 12,
 "label": "HOUSE INFO",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 40,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button house info"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#000000"
 ],
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "iconWidth": 32,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 130,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "fontSize": 12,
 "label": "PANORAMA LIST",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 40,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button panorama list"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "iconWidth": 32,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 90,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "fontSize": 12,
 "label": "LOCATION",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 40,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button location"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "iconWidth": 32,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 103,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "fontSize": 12,
 "label": "FLOORPLAN",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 40,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button floorplan"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "iconWidth": 32,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 112,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "fontSize": 12,
 "label": "PHOTOALBUM",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 40,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button photoalbum"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "fontFamily": "Montserrat",
 "shadowBlurRadius": 15,
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "iconWidth": 32,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 90,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "propagateClick": true,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "fontSize": 12,
 "label": "REALTOR",
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "fontColor": "#FFFFFF",
 "height": 40,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button realtor"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "85%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "paddingRight": 50,
 "width": "50%",
 "borderRadius": 0,
 "paddingBottom": 20,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "height": "100%",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "85%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "height": "100%",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "paddingRight": 50,
 "width": "50%",
 "borderRadius": 0,
 "paddingBottom": 20,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "height": 84,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "header"
 }
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontColor": "#666666",
 "paddingLeft": 70,
 "scrollBarWidth": 10,
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingBottom": 70,
 "width": "100%",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingBottom": 3,
 "verticalAlign": "middle",
 "itemThumbnailHeight": 125,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "scrollBarColor": "#04A3E1",
 "itemLabelFontStyle": "normal",
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "class": "ThumbnailGrid",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 26,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontFamily": "Montserrat",
 "itemThumbnailWidth": 220,
 "itemMaxHeight": 1000,
 "shadow": false,
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemHorizontalAlign": "center",
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemThumbnailShadow": false,
 "itemMaxWidth": 1000,
 "backgroundOpacity": 0.05,
 "selectedItemThumbnailShadow": true,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemBackgroundOpacity": 0,
 "paddingRight": 70,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "height": "100%",
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "horizontalAlign": "center",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemHeight": 156,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 14,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "height": "100%",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "85%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "height": "100%",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "paddingRight": 50,
 "width": "15%",
 "borderRadius": 0,
 "paddingBottom": 20,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 400,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "height": 140,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "header"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "height": 140,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "header"
 }
},
{
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "height": "100%",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "Container photo"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "Container photo"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "55%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "paddingRight": 60,
 "width": "45%",
 "borderRadius": 0,
 "paddingBottom": 20,
 "overflow": "visible",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "height": "75%",
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000
},
{
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "height": 60,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 }
},
{
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 30,
 "overflow": "scroll",
 "minHeight": 520,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 370,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "right": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "borderSize": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "bottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Container arrows"
 },
 "height": "100%"
},
{
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "height": 60,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 }
},
{
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "height": "100%",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 30,
 "overflow": "scroll",
 "minHeight": 520,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 370,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 100,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.05vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "height": "36.14%",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "top": 20,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10309.779603517936!2d27.213118992822775!3d49.758887613193195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472de0a2ebf1cc9f%3A0x1d9fb1d4c833ce40!2z0JfQsNC80L7QuiDQutC90Y_Qt9C10Lkg0J7RgdGC0YDQvtC20YHQutC40YU!5e0!3m2!1sru!2sua!4v1732478295697!5m2!1sru!2sua\" width=\\\"600\\\" height=\\\"450\\\" frameborder=\\\"0\\\" style=\\\"border:0\\\" allowfullscreen>",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "class": "WebFrame",
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "insetBorder": false
},
{
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "height": 60,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 }
},
{
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "height": "100%",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 30,
 "overflow": "scroll",
 "minHeight": 520,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 370,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 100,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.05vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "height": "36.14%",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "top": 20,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "paddingRight": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 100,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.05vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.05vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 },
 "height": "100%"
},
{
 "maxHeight": 60,
 "height": "36.14%",
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "top": 20,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingBottom": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "borderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "progressBarBorderRadius": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "maxHeight": 60,
 "height": "10%",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "10%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "propagateClick": false,
 "top": 20,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "transparencyActive": false,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "bottom",
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000
},
{
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "height": 60,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 }
},
{
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 30,
 "overflow": "scroll",
 "minHeight": 520,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 370,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 40,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 20,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">I\u0441\u0442\u043e\u0440\u0438\u043a\u043e-\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u0438\u0439 \u0446\u0435\u043d\u0442\u0440-\u043c\u0443\u0437\u0435\u0439 \u00ab\u0421\u0442\u0430\u0440\u0438\u0439 \u041a\u043e\u0441\u0442\u044f\u043d\u0442\u0438\u043di\u0432\u00bb</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.06vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.06vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.34vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.34vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.34vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.34vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.24vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "height": "100%"
},
{
 "fontFamily": "Bebas Neue Bold",
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "iconWidth": 32,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "class": "Button",
 "width": "46%",
 "backgroundColorDirection": "vertical",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "80%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "absolute",
 "data": {
  "name": "Container separator"
 },
 "height": "30%"
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 20,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">I\u0441\u0442\u043e\u0440\u0438\u043a\u043e-\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u0438\u0439 \u0446\u0435\u043d\u0442\u0440-\u043c\u0443\u0437\u0435\u0439 \u00ab\u0421\u0442\u0430\u0440\u0438\u0439 \u041a\u043e\u0441\u0442\u044f\u043d\u0442\u0438\u043di\u0432\u00bb</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.06vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.06vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.34vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.34vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "height": "100%"
},
{
 "fontFamily": "Bebas Neue Bold",
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "iconWidth": 32,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "borderColor": "#000000",
 "mode": "push",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "class": "Button",
 "width": "46%",
 "backgroundColorDirection": "vertical",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "Button"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 20,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">\u0417\u0430\u043c\u043e\u043a \u043a\u043d\u044f\u0437i\u0432 \u041e\u0441\u0442\u0440\u043e\u0436\u0441\u044c\u043a\u0438\u0445</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.06vh;font-family:'Bebas Neue Bold';\">\u0432\u0443\u043b\u0438\u0446\u044f \u0417\u0430\u043c\u043a\u043e\u0432\u0430, 1/1,</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.06vh;font-family:'Bebas Neue Bold';\">\u0421\u0442\u0430\u0440\u043e\u043a\u043e\u0441\u0442\u044f\u043d\u0442\u0438\u043di\u0432, \u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u044c\u043a\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u044c, 31100</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\">\u0425\u043e\u0447\u0435\u0448 \u0432\u0456\u0434\u0447\u0443\u0442\u0438 \u0441\u0435\u0431\u0435 \u0433\u043e\u0441\u0442\u0435\u043c \u0441\u0442\u0430\u0440\u043e\u0432\u0438\u043d\u043d\u043e\u0433\u043e \u0437\u0430\u043c\u043a\u0443? \u041f\u043e\u0440\u0438\u043d\u0443\u0442\u0438 \u0443 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0443 \u0432\u0435\u043b\u0438\u0447\u043d\u0438\u0445 \u043a\u043d\u044f\u0437\u0456\u0432 \u0456 \u0431\u043b\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u0438\u0445 \u043a\u043d\u044f\u0433\u0438\u043d\u044c? \u041f\u0440\u0438\u0457\u0436\u0434\u0436\u0430\u0439 \u0443 \u0421\u0442\u0430\u0440\u043e\u043a\u043e\u0441\u0442\u044f\u043d\u0442\u0438\u043d\u0456\u0432\u0441\u044c\u043a\u0438\u0439 \u0437\u0430\u043c\u043e\u043aXVI \u0441\u0442\u043e\u043b\u0456\u0442\u0442\u044f - \u0443 \u043f\u043e\u043c\u0435\u0448\u043a\u0430\u043d\u043d\u044f \u043a\u043d\u044f\u0437\u044f \u041e\u0441\u0442\u0440\u043e\u0437\u044c\u043a\u043e\u0433\u043e, \u044f\u043a\u043e\u0433\u043e \u0432\u0432\u0430\u0436\u0430\u044e\u0442\u044c \u043d\u0435\u043a\u043e\u0440\u043e\u043d\u043e\u0432\u0430\u043d\u0438\u043c \u043f\u043e\u043b\u044c\u0441\u044c\u043a\u0438\u043c \u043a\u043e\u0440\u043e\u043b\u0435\u043c! \u0422\u0443\u0442 \u0442\u043e\u0431\u0456 \u0440\u043e\u0437\u043a\u0430\u0436\u0443\u0442\u044c \u0441\u0442\u0430\u0440\u043e\u0434\u0430\u0432\u043d\u0456 \u0456\u0441\u0442\u043e\u0440\u0456\u0457 \u043f\u0440\u043e \u043a\u043e\u0445\u0430\u043d\u043d\u044f \u043c\u0443\u0436\u043d\u0456\u0445 \u043b\u0438\u0446\u0430\u0440\u0456\u0432 \u0442\u0430 \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u0438\u0445 \u0436\u0456\u043d\u043e\u043a, \u043f\u0435\u0440\u0435\u043a\u0430\u0437\u0438 \u043f\u0440\u043e \u0442\u0430\u0454\u043c\u043d\u0438\u0446\u0456 \u0434\u0440\u0435\u0432\u043d\u044c\u043e\u0433\u043e \u0440\u043e\u0434\u0443 \u041e\u0441\u0442\u0440\u043e\u0437\u044c\u043a\u0438\u0445, \u043b\u0435\u0433\u0435\u043d\u0434\u0438 \u043f\u0440\u043e \u043d\u0435\u0439\u043c\u043e\u0432\u0456\u0440\u043d\u0456 \u0441\u043a\u0430\u0440\u0431\u0438, \u044f\u043a\u0456 \u0437\u0430\u0442\u043e\u043d\u0443\u043b\u0438 \u0443 \u0440\u0456\u0447\u0446\u0456 \u0421\u043b\u0443\u0447. \u0422\u0443\u0442 \u0456 \u0434\u043e\u043d\u0438\u043d\u0456 \u0436\u0438\u0432\u0435 \u043a\u0456\u0442 \u041c\u0430\u0440\u043a\u0456\u0437, \u043f\u0440\u0435\u0434\u043e\u043a \u044f\u043a\u043e\u0433\u043e, \u0437\u0430 \u043f\u0435\u0440\u0435\u043a\u0430\u0437\u0430\u043c\u0438, \u0436\u0438\u0432 \u0443 \u0446\u044c\u043e\u043c\u0443 \u0432\u0435\u043b\u0438\u0447\u043d\u043e\u043c\u0443 \u043f\u043e\u043c\u0456\u0441\u0442\u0456. </SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "height": "100%"
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "iconWidth": 32,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": 207,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "propagateClick": false,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 34,
 "label": "lorem ipsum",
 "class": "Button",
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "fontColor": "#FFFFFF",
 "height": 59,
 "shadow": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "visible": false,
 "data": {
  "name": "Button"
 },
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 10,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.75vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.95vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "height": "45%"
},
{
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "layout": "horizontal",
 "data": {
  "name": "- content"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 1,
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "propagateClick": false,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 },
 "maxWidth": 200
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "width": "75%",
 "borderRadius": 0,
 "paddingBottom": 10,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.06vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.62vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.44vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.44vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.44vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.72vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.72vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 },
 "height": "100%"
}],
 "horizontalAlign": "left",
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "gap": 10,
 "scrollBarMargin": 2,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getKey": function(key){  return window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
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
