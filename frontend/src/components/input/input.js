import {useChangeInput} from "../../core/hooks/input/useChangeInput";
import {useClearInput} from "../../core/hooks/input/useClearInput";
import styles from "./input.module.css";

const Input = ({title, goSalary}) => {
	const {salary, inputChange} = useChangeInput(goSalary);
	const {inputRef, inputClear} = useClearInput();

	return (
		<div>
			<div className={styles.title}>{title}</div>
			<div className={styles.input}>
				<input
					maxLength="7"
					ref={inputRef}
					onChange={(event) => inputChange(event)}
					value={salary}
					className={styles.input_input}
					placeholder="От..."
				/>
				<div
					onClick={() => inputClear()}
					className={salary ? styles.clear : styles.clearNone}
				>
					×
				</div>
			</div>
		</div>
	);
};

export {Input};
