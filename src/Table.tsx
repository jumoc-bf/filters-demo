import { Button, Checkbox } from "@fluentui/react-components";
import { useState } from "react";

const TableWithCheckbox = () => {
	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const [items, setItems] = useState([
		{ id: 1, name: "Item 1" },
		{ id: 2, name: "Item 2" },
		{ id: 3, name: "Item 3" },
		{ id: 4, name: "Item 4" },
		{ id: 5, name: "Item 5" },
		{ id: 6, name: "Item 6" },
		{ id: 7, name: "Item 7" },
	]);

	const handleCheckboxChange = (idx: number) => {
		if (selectedItems.includes(idx)) {
			setSelectedItems([...selectedItems].filter((item) => item !== idx));
			return;
		}
		setSelectedItems((prev) => [...prev, idx]);
	};

	const handleGroup = () => {
		console.log("Group", selectedItems);
	};

	return (
		<>
			<Button onClick={handleGroup}>Group</Button>
			<table>
				<thead>
					<tr>
						<th>Checkbox</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item, idx) => (
						<tr key={item.id}>
							<td>
								<Checkbox
									checked={selectedItems.includes(idx)}
									onChange={() => handleCheckboxChange(idx)}
								/>
							</td>
							<td>{item.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default TableWithCheckbox;
