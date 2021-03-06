const progress_bars = document.querySelectorAll(".progress");

progress_bars.forEach((bar) => {
  setTimeout(() => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`;
  });
});

function onClickDone() {
  progress_bars.forEach((bar) => {
    setTimeout(() => {
      const { size } = bar.dataset;
      bar.style.width = `100%`;
    });
  });
}

function onClickReset() {
  progress_bars.forEach((bar) => {
    setTimeout(() => {
      const { size } = bar.dataset;
      bar.style.width = `${size}%`;
    });
  });
}
