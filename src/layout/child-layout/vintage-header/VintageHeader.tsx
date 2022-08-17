
type IVintageHeader = {
  title: string
}
const VintageHeader = (props: IVintageHeader) => (
  <div className="vintage-header">
    <img src="/assets/images/vt-hd-left.png" alt="" />
    <h2>{props.title}</h2>
    <img src="/assets/images/vt-hd-right.png" alt="" />
  </div>
);

export { VintageHeader };
