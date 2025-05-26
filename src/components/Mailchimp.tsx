"use client";

import { mailchimp, person } from "@/app/resources";
import { Button, Flex, Heading, Input, Text, Background, Column } from "@/once-ui/components";
import { opacity, SpacingToken } from "@/once-ui/types";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const validateMobileNumber = (number: string): boolean => {
    // Basic validation: check if the number is not empty
    return number.trim() !== "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobileNumber(value);

    if (!validateMobileNumber(value)) {
      setError("Please enter a valid mobile number.");
    } else {
      setError("");
    }
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    setTouched(true);
    if (!validateMobileNumber(mobileNumber)) {
      setError("Please enter a valid mobile number.");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateMobileNumber(mobileNumber) && !error) {
      // Here you would typically send the mobileNumber to your backend
      console.log("Mobile number submitted:", mobileNumber);
      alert(`Mobile number ${mobileNumber} submitted. Your AI call agent test will be initiated shortly.`);
      // Clear the input field after submission
      setMobileNumber("");
      setTouched(false);
    } else {
      setError("Please enter a valid mobile number before submitting.");
    }
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Background
            position="absolute"
            mask={{
              x: mailchimp.effects.mask.x,
              y: mailchimp.effects.mask.y,
              radius: mailchimp.effects.mask.radius,
              cursor: mailchimp.effects.mask.cursor
            }}
            gradient={{
              display: mailchimp.effects.gradient.display,
              opacity: mailchimp.effects.gradient.opacity as opacity,
              x: mailchimp.effects.gradient.x,
              y: mailchimp.effects.gradient.y,
              width: mailchimp.effects.gradient.width,
              height: mailchimp.effects.gradient.height,
              tilt: mailchimp.effects.gradient.tilt,
              colorStart: mailchimp.effects.gradient.colorStart,
              colorEnd: mailchimp.effects.gradient.colorEnd,
            }}
            dots={{
              display: mailchimp.effects.dots.display,
              opacity: mailchimp.effects.dots.opacity as opacity,
              size: mailchimp.effects.dots.size as SpacingToken,
              color: mailchimp.effects.dots.color,
            }}
            grid={{
              display: mailchimp.effects.grid.display,
              opacity: mailchimp.effects.grid.opacity as opacity,
              color: mailchimp.effects.grid.color,
              width: mailchimp.effects.grid.width,
              height: mailchimp.effects.grid.height,
            }}
            lines={{
              display: mailchimp.effects.lines.display,
              opacity: mailchimp.effects.lines.opacity as opacity,
              size: mailchimp.effects.lines.size as SpacingToken,
              thickness: mailchimp.effects.lines.thickness,
              angle: mailchimp.effects.lines.angle,
              color: mailchimp.effects.lines.color,
            }}
          />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Flex fillWidth maxWidth={24} mobileDirection="column" gap="8" horizontal="center">
          <Input
            labelAsPlaceholder
            id="mobile-number"
            name="mobile-number"
            type="tel"
            label="Mobile Number"
            required
            value={mobileNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={touched && error ? error : undefined}
          />
          <Button type="submit" size="m" fillWidth>
            Test AI Call Agent
          </Button>
        </Flex>
      </form>
    </Column>
  );
};
