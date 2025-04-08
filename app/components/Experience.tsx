'use client';

import { motion } from 'framer-motion';

export default function Experience() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Experience
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'VMware Inc.',
							description: 'Software Engineer - II ',
							//handling 1M+ daily requests with 99.99% uptime',
							details: [
								'Contributed to the Content Library a flagship product of vCenter at VMware.',
                                'Designed Static-url feature in Content Library to sync. data across multiple vCenters located in different data centers.',
                                'Integrated Amazon S3 Object-Store for deploying and storing VM applications and templates, and resolved',
                                'synchronization issues across multiple libraries located in different zones.',
							],
							tech: ['Java', 'Reactive Java', 'Kafka', 'Spring-Boot', 'SQL', 'Amazon S3'],
						},
						{
							title: 'PayPal Inc.',
							description: 'Software Engineer',
							details: [
                                'Developed a domain orchestration service using Spring from scratch to enrich customer context.', 
                                'This enables PayPal channels and platforms to resolve customer interactions more quickly and efficiently.',
                                'Designed and implemented workflows for periodic and delayed event processing.',
                                'Built Java workflows to host use-case-specific beans for loading context-specific data.',
                                'Aggregated customer transactions from downstream services using custom Java workflows based on user intent.',
                                'Created custom transformers to map various downstream service responses into a common structure',
                                'Incorporated scripts using Python & Spark scripts to perform Data Analysis for comparison of data provided from different services',
                                'Reduced query time for data analysis in BigQuery by 500% using User-Defined Functions (UDF) written in JavaScript.'
							],
							tech: ['Java', 'Rx-Java', 'Kafka', 'Spring-Boot', 'Jupyter notebooks', 'Python', 'SQL'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
