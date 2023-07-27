"use client";
import { Card, Metric, NumberInput, Text } from "@tremor/react";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h2 className="text-center">Konversi Nilai Akhir</h2>
			<div className="pt-4 flex flex-col justify-center items-center w-full px-2">
				<NumberInput
					placeholder="Nilai Tugas"
					max={100}
					min={0}
					className=" mb-5 text-xl"
				/>
				<NumberInput
					placeholder="Nilai UTS"
					max={100}
					min={0}
					className=" mb-5"
				/>
				<NumberInput
					placeholder="Nilai UAS"
					max={100}
					min={0}
					className=" mb-2"
				/>
				<Card
					className="max-w-full mx-auto mt-5"
					decoration="top"
					decorationColor="indigo"
				>
					<Text>Nilai Akhir</Text>
					<Metric>A (98)</Metric>
				</Card>
			</div>
		</main>
	);
}
