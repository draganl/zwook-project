<template>
  <div>
    <div class="flex justify-center items-center gap-9 text-text-xs">
      <button type="button" aria-label="Shuffle">
        <UiIcon
          id="shuffle"
          name="interface-arrows-shuffle-multimedia-shuffle-multi-button-controls-media"
          width="20"
          height="20"
        />
      </button>
      <button type="button" aria-label="Previous">
        <UiIcon
          id="prev"
          name="entertainment-control-button-previous-button-television-buttons-movies-skip-previous-video-controls"
          width="20"
          height="20"
        />
      </button>
      <button type="button" aria-label="Play">
        <UiIcon
          id="play"
          name="entertainment-control-button-play-circle-controls-media-multi-play-multimedia-button-circle"
          width="32"
          height="32"
        />
      </button>
      <button type="button" aria-label="Next">
        <UiIcon
          id="next"
          name="entertainment-control-button-next-button-television-buttons-movies-skip-next-video-controls"
          width="20"
          height="20"
        />
      </button>
      <button type="button" aria-label="Repeat">
        <UiIcon
          id="repeat"
          name="interface-arrows-loop-arrow-diagram-loop-infinity-repeat"
          width="20"
          height="20"
        />
      </button>
    </div>
    <div class="flex justify-between items-center mt-5 gap-3">
      <div
        id="current-time"
        class="text-text-xxs text-text-primaryPlaceholder dark:text-text-primaryPlaceholder"
      >
        0:34
      </div>
      <uiProgressBar size="sm" color="neutral" class="lg:min-w-[350px]" />
      <div
        id="total-time"
        class="text-text-xxs text-text-primaryPlaceholder dark:text-text-primaryPlaceholder"
      >
        3:57
      </div>
    </div>
  </div>
</template>
