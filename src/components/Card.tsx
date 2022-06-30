interface Props {
  size: number;
  title: string;
  description: string;
  src: string;
  alt: string;
}

export default function Card({
  size,
  title,
  description,
  src,
  alt
}: Props) {
  return (
    <div className={`col-md-${size} col-sm-12 my-2`}>
      <div className="card box-shadow campus-boxes">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <img className="img-fluid mb-3" src={src} alt={alt} />
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
