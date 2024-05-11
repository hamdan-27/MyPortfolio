import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import Image from "next/image";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          About Hamdan
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          {/* <PrismicRichText field={slice.primary.body} /> */}
          Dedicated and skilled Bachelor of Engineering graduate with a focus on Software Engineering. Proficient in Python development and AI, with experience in creating innovative solutions such as virtual real estate chatbots and automatic mailing scripts. Strong understanding of Full Stack Web Development, AI, and Machine Learning concepts. Effective communicator and team player.
        </div>
        <Button
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />

        <Image
          src='/Hamdan_Beautiful_Face.jpeg'
          alt='hamdan profile picture'
          width={1000}
          height={5000}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
