import { LinkPreview } from '@/components/LinkPreview'
import { Slide } from '@/components/Slide'

export const ResourcesSlide = () => {
	return (
		<Slide className='p-24 gap-8'>
			<h2 className="text-2xl">Where to go from here?</h2>
			<div className="grid grid-cols-3 gap-4">
				<LinkPreview
					siteName='React Docs'
					url='https://react.dev/'
					desc='The official documentation by the engineers on the React team.' />
				<LinkPreview
					siteName='React Patterns'
					url='https://reactpatterns.com/'
					desc='A cheatsheet of short snippets and patterns for developing in React. Your new best friend.' />
				<LinkPreview
					siteName='MDN Web Docs'
					url='https://developer.mozilla.org/en-US/'
					desc='Documentation for HTML, CSS, JS, and more. Created by Mozilla, co-maintained by the open-source community.' />
				<LinkPreview
					siteName='Next.js'
					url='https://nextjs.org/docs'
					desc='Documentation for the Next.js framework by Vercel, made for writing full-stack React applications.' />
				<LinkPreview
					siteName='Vite.js'
					url='https://vitejs.dev/'
					desc='A modern build tool and development server by Evan You, also fantastic for creating React applications.' />
				<LinkPreview
					siteName='Reactiflux Discod'
					url='https://discord.gg/reactiflux'
					desc='A friendly, online Discord community with over 200K members. Frequently hosts Q&As with engineers in the industry!' />
			</div>
		</Slide>
	)
}