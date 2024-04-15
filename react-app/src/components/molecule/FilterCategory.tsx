import { Category } from '../../types/category';

type FilterCategoryProps = {
  categories:Category[]
  selectedCategory:Category
  setSelectedCategory:(category:Category) => void
}

function FilterCategory({
  categories,
  selectedCategory,
  setSelectedCategory,
}: FilterCategoryProps) {
  return (
    <div style={{ marginBlock: '16px' }}>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          style={{
            marginRight: '12px',
            color: selectedCategory === category
              ? 'red'
              : '',
          }}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterCategory;
