import CrudDropdown from "./crud-dropdown"
import Icon from "./icon"

interface CategoryItemProps {
    category: Category
}

export default function CategoryItem(category: CategoryItemProps) {
    return (
        <div className="flex justify-between mt-4 px-2">
            <div className="flex gap-2">
                <Icon name={category.category.icon} />
                <span>{category.category.name}</span>
            </div>
            <div>
                <CrudDropdown />
            </div>
        </div>
    )
}