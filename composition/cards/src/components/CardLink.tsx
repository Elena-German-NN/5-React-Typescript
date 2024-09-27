type Props = {
  linkText: string,
  linkPath: string,
}

export default function CardLink({linkText, linkPath}:Props) {
  return (
    <>
    <a href={linkPath} className="btn btn-primary">{linkText}</a>
    </>
  )
}
