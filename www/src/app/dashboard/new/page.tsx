"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { personaSchema } from "@/types/index";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CreatePersonaPage() {
  const { toast } = useToast();
  const [formSubmitting, setFormSubmitting] = useState(false);

  const personaCreateForm = useForm<z.infer<typeof personaSchema>>({
    resolver: zodResolver(personaSchema),
    defaultValues: {
      category: 'Normal Human',
      description: '',
      image: '',
      instructions: '',
      name: '',
      example_conversation: '',
    },
  })

  async function onFormSubmit(values: z.infer<typeof personaSchema>) {
    setFormSubmitting(true)
    try {
      console.log(values);

      // TODO : reset the from values
    } catch (error: any) {
      console.warn('[CreatePersonaPage : onFormSubmit] \n ', error);

      toast({
        variant: "destructive",
        title: "Something went wrong. Please try again.",
        description: error.message || "",
      })
    } finally {
      setFormSubmitting(false);
    }
  }

  return (
    <Form {...personaCreateForm} >
      <form onSubmit={personaCreateForm.handleSubmit(onFormSubmit)}>
        <section className="py-2 max-sm:py-1 max-w-screen-md mx-auto">
          <div>
            <h3 className="text-lg font-medium">General Information</h3>
            <p className="text-sm text-muted-foreground">
              General Details about persona you want to create.
            </p>
            <Separator className="my-2" />
          </div>
          <FormField
            control={personaCreateForm.control}
            name="image"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Avatar</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display image.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personaCreateForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Bunny AI" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personaCreateForm.control}
            name="description"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="This AI will treat you as best friend!" {...field} />
                </FormControl>
                <FormDescription>
                  What your persona does.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personaCreateForm.control}
            name="category"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {['Actor', 'Entrepreneur', 'Philosopher', 'Sports Person', 'Politician', 'Army Person', 'Artist', 'Scientist', 'Musician', 'Writer', 'Educator', 'Activist', 'Journalist', 'Chef', 'Engineer', 'Designer', 'Business Executive', 'Historian', 'Social Worker', 'Psychologist', 'Nurse', 'Doctor', 'Researcher', 'Technologist', 'Philanthropist', 'Influencer', 'Normal Human'].map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Type of persona.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <h3 className="text-lg font-medium">Configuration</h3>
            <p className="text-sm text-muted-foreground">
              Detailed Instruction for 'AI Behavior'.
            </p>
            <Separator className="my-2" />
          </div>
          <FormField
            control={personaCreateForm.control}
            name="instructions"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Instructions</FormLabel>
                <FormControl>
                  <Textarea rows={5} placeholder="You are Elon Musk, founder of SpaceX, Tesla, HyperLoop and Neuralink, an inventor and entrepreneur who seemingly leaps from one innovation to the next with a relentless drive. Your passion for sustainable energy, space, and technology shines through in your voice, eyes, and gestures. When speaking about your projects, you’re filled with an electric excitement that's both palpable and infectious, and you often have a mischievous twinkle in your eyes, hinting at the next big idea." {...field} />
                </FormControl>
                <FormDescription>
                  Full Details of how your persona should behave.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={personaCreateForm.control}
            name="example_conversation"
            render={({ field }) => (
              <FormItem className="max-w-screen-md min-w-fit mx-auto my-6">
                <FormLabel>Example Conversation</FormLabel>
                <FormControl>
                  <Textarea placeholder={`You: Hi Elon, how's your day been? 
Elon: *with an energized grin* Busy as always. Between sending rockets to space and building the future of electric vehicles, there's never a dull moment. How about you? 
You: Just a regular day for me. How's the progress with Mars colonization? 
Elon: *eyes sparkling with enthusiasm* We're making strides! Life becoming multi-planetary isn’t just a dream. It’s a necessity for the future of humanity. 
You: That sounds incredibly ambitious. Are electric vehicles part of this big picture? 
Elon: *passionately* Absolutely! Sustainable energy is a beacon for both our planet and for the far reaches of space. We’re paving the path, one innovation at a time. 
You: It’s mesmerizing to witness your vision unfold. Any upcoming projects that have you buzzing? 
Elon: *with a mischievous smile* Always! But Neuralink... it’s not just technology. It's the next frontier of human evolution.`}
                    rows={10}
                    {...field} />
                </FormControl>
                <FormDescription>
                  Chat format of how persona should react in chats.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="my-4 grid place-items-center">
            <Separator className="my-2" />
            <Button type="submit" className="text-white">
              {formSubmitting ?
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
                :
                "Create Persona"
              }
            </Button>
          </div>
        </section>
      </form>
    </Form>
  );
}
