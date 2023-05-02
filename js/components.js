const createTabItem = (category) => $(`
  <button
    id="nav-${category.text}-tab"
    class="nav-link"
    type="button"
    role="tab"
    data-bs-toggle="tab"
    data-category="${category.text}"
  >
    ${category.text}
  </button>
`)

export {
  createTabItem,
}
