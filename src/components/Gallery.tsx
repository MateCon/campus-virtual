import Card from "./Card"
import DATA from "../data/gallery_data.json"

export default function Gallery() {
  return (
    <div className="row">
      {DATA.map(props => <Card {...props} />)}
    </div>
  )
}