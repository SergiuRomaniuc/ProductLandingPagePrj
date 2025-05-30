

const dropdown = document.getElementById("filter-categories");

dropdown.addEventListener("change", function(e) {
  const selectedValue = this.value;
  console.log('Selected: ' + selectedValue);

  const blogs = document.getElementsByClassName("blogs-wrapper");

  if (selectedValue === 'All Topics') {
    for (const blog of blogs) {
      blog.classList.remove("disabled");
    }
  } else {
    for(const blog of blogs) {
      if (!blog.classList.contains(selectedValue)) {
        blog.classList.add("disabled");
      }
      else {
        blog.classList.remove("disabled");
      }
    }
  }
})
