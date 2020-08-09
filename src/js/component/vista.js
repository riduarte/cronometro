import React from "react";

export const SecondsCounter = time => {
	return (
		<div className="rounded bg-dark col-2 text-center text-white p-1 m-2">
			{time.countSecond}
		</div>
	);
};
