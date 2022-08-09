export default function QuoteBlock({
  quote,
  bgColorClasses,
}) {
  return (
   <div className={`p-8 my-8 rounded-md quoteBlockbg ${bgColorClasses}`}>
        <blockquote className="text-3xl italic font-bold md:py-12 md:px-8">
            {quote}
        </blockquote>
    </div>
  );
}
